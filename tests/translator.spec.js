// tests/translator.spec.js
const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const cases = require("../cases.option1.js");

// ---------- Helpers ----------
function normalize(text) {
  return (text || "")
    .toString()
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .normalize("NFC");
}

function csvEscape(value) {
  const s = (value ?? "").toString();
  if (/[,"\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function getInputBox(page) {
  // Prefer Singlish placeholder (normal mode)
  const singlish = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );
  if (await singlish.count()) {
    await expect(singlish).toBeVisible({ timeout: 10000 });
    return singlish;
  }

  // After Swap, placeholder may change → fallback
  const any = page.locator("textarea").first();
  await expect(any).toBeVisible({ timeout: 10000 });
  return any;
}

async function getOutputBox(page) {
  // Output is a DIV based on your DOM
  const output = page.locator("div.whitespace-pre-wrap.overflow-y-auto");
  await expect(output).toBeVisible({ timeout: 10000 });
  return output;
}

async function readBoxText(locator) {
  try {
    return await locator.inputValue({ timeout: 2000 });
  } catch {}
  try {
    return await locator.innerText({ timeout: 2000 });
  } catch {}
  try {
    return (await locator.textContent({ timeout: 2000 })) || "";
  } catch {}
  return "";
}

async function waitForOutputChange(page, outputBox, previous, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (page.isClosed()) return "";
    const now = normalize(await readBoxText(outputBox));
    // allow empty -> text updates too
    if (now !== previous) return now;
    await page.waitForTimeout(150);
  }
  return normalize(await readBoxText(outputBox));
}

// ---------- Report collector ----------
const results = [];
const reportDir = path.join(process.cwd(), "reports");
const reportCsvPath = path.join(reportDir, "translator-results.csv");

// Screenshot folders
const shotsFailDir = path.join(process.cwd(), "screenshots", "fails");
const shotsUiDir = path.join(process.cwd(), "screenshots", "ui");

test.describe.configure({ mode: "serial" });

test.describe("SwiftTranslator - Singlish to Sinhala functional scenarios", () => {
  test.beforeAll(() => {
    ensureDir(reportDir);
    ensureDir(shotsFailDir);
    ensureDir(shotsUiDir);
  });

  test.beforeEach(async ({ page }) => {
    // Avoid dialog crashes
    page.on("dialog", async (d) => {
      try {
        await d.dismiss();
      } catch {}
    });

    await page.goto("https://www.swifttranslator.com/", {
      waitUntil: "domcontentloaded",
    });

    // Some sites never go networkidle; ignore if it times out
    await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {});
  });

  // ---------- Functional scenarios (24 Pos + 14 Neg) ----------
  for (const tc of cases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      const inputBox = await getInputBox(page);
      const outputBox = await getOutputBox(page);

      const prevOut = normalize(await readBoxText(outputBox));

      // Clear + fill (textarea)
      await inputBox.fill("");
      await inputBox.fill(tc.input);

      const actualRaw = await waitForOutputChange(page, outputBox, prevOut, 20000);

      const status =
        normalize(actualRaw) === normalize(tc.expected) ? "Pass" : "Fail";

      // ----- Screenshot ONLY when FAIL -----
      if (status === "Fail") {
        const safeId = tc.id.replace(/[^a-zA-Z0-9_-]/g, "_");

        // Full page evidence
        await page.screenshot({
          path: path.join(shotsFailDir, `${safeId}-FAIL.png`),
          fullPage: true,
        });

        // Clean close-ups (better for reports)
        await inputBox.screenshot({
          path: path.join(shotsFailDir, `${safeId}-input.png`),
        });
        await outputBox.screenshot({
          path: path.join(shotsFailDir, `${safeId}-output.png`),
        });
      }

      results.push({
        "TC ID": tc.id,
        "Test case name": tc.name,
        "Input length type": tc.lenType,
        "Input": tc.input,
        "Expected output": tc.expected,
        "Actual output": actualRaw,
        "Status": status,
        "Accuracy justification/ Description of issue type": tc.justification,
        "What is covered by the test": tc.covered,
      });

      // Assignment needs both Pass and Fail evidence → keep suite running
      expect(true).toBeTruthy();
    });
  }

  // ---------- UI scenario (1) ----------
  test("UI_0001 - Swap button rapid clicks should not break UI", async ({ page }) => {
    let status = "Pass";
    let actual = "";
    let issue =
      "UI remains responsive; swapping does not freeze or clear fields unexpectedly.";

    try {
      const inputBox = await getInputBox(page);
      const outputBox = await getOutputBox(page);
      const swapBtn = page.getByRole("button", { name: /Swap Languages/i });

      await expect(swapBtn).toBeVisible({ timeout: 8000 });

      const before = normalize(await readBoxText(outputBox));

      await inputBox.fill("suba udhaasanak");
      for (let i = 0; i < 5; i++) await swapBtn.click().catch(() => {});

      // Re-acquire textarea because Swap may re-render/change placeholder
      const inputAfterSwap = await getInputBox(page);
      await inputAfterSwap.click({ timeout: 10000 });
      await expect(inputAfterSwap).toBeEditable({ timeout: 10000 });
      await inputAfterSwap.fill("oyata kohomadha?");

      const out = await waitForOutputChange(page, outputBox, before, 20000);
      actual = out || "";

      if (!normalize(out)) {
        status = "Fail";
        issue = "After rapid swapping, output did not update / UI became unstable.";
      }
    } catch (e) {
      status = "Fail";
      actual = e?.message || "UI error";
      issue = "Swap button not found / interaction failed / UI unstable.";
    }

    // UI screenshot always (evidence)
    await page.screenshot({
      path: path.join(shotsUiDir, `UI_0001-${status}.png`),
      fullPage: true,
    });

    results.push({
      "TC ID": "UI_0001",
      "Test case name": "Swap button rapid clicks should not break translation UI",
      "Input length type": "N/A",
      "Input": "Swap x5 quickly, then enter a new sentence",
      "Expected output": "UI responsive; output updates correctly",
      "Actual output": actual,
      "Status": status,
      "Accuracy justification/ Description of issue type": issue,
      "What is covered by the test": "UI stability/usability under rapid interaction",
    });

    expect(true).toBeTruthy();
  });

  // ---------- Export CSV ----------
  test.afterAll(() => {
    ensureDir(reportDir);

    const headers = [
      "TC ID",
      "Test case name",
      "Input length type",
      "Input",
      "Expected output",
      "Actual output",
      "Status",
      "Accuracy justification/ Description of issue type",
      "What is covered by the test",
    ];

    const lines = [];
    lines.push(headers.map(csvEscape).join(","));

    for (const row of results) {
      lines.push(headers.map((h) => csvEscape(row[h])).join(","));
    }

    fs.writeFileSync(reportCsvPath, lines.join("\n"), "utf8");
    console.log(`CSV report written: ${reportCsvPath}`);
    console.log(`Fail screenshots: ${shotsFailDir}`);
    console.log(`UI screenshots: ${shotsUiDir}`);
  });
});
