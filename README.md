```md
# ITPM Assignment 1 — SwiftTranslator Test Automation (Option 1)

Automated testing for **Singlish → Sinhala** conversion on:
https://www.swifttranslator.com/

Tooling: **Playwright Test**

This project runs:
- **24 Positive functional scenarios** (expected Pass)
- **14 Negative functional scenarios** (expected Fail / incorrect behavior evidence)
- **1 UI scenario** (`UI_0001`) — rapid Swap button stress test

It generates:
- **CSV report** (assignment template columns)
- **Screenshots evidence** (Fail-only + UI)

---

## Project Structure (expected)

```

ITPM assaingnment 1/
package.json
playwright.config.js
cases.option1.js
tests/
translator.spec.js
reports/                 (generated)
translator-results.csv
screenshots/             (generated)
fails/
ui/

````

---

## Prerequisites
- **Node.js 18+** recommended
- Windows PowerShell / Terminal

Check versions:
```bash
node -v
npm -v
````

---

## Install Dependencies

### 1) Initialize npm (only if you don’t have package.json)

Run in the project root:

```bash
npm init -y
```

### 2) Install Playwright Test

```bash
npm i -D @playwright/test
```

### 3) Install Playwright browser binaries

Install all browsers:

```bash
npx playwright install
```

Or install only Chromium (recommended):

```bash
npx playwright install chromium
```

---

## Run Tests (recommended)

Run Chromium only with 1 worker for stability:

```bash
npx playwright test --project=chromium --workers=1
```

Optional: view the HTML report:

```bash
npx playwright show-report
```

---

## Outputs (after running)

### CSV Report

Generated at:

```
reports/translator-results.csv
```

Columns match assignment template:

* TC ID
* Test case name
* Input length type
* Input
* Expected output
* Actual output
* Status
* Accuracy justification/ Description of issue type
* What is covered by the test

### Screenshots Evidence

Fail-only functional screenshots:

```
screenshots/fails/
```

For each failing TC:

* `{TC_ID}-FAIL.png` (full page)
* `{TC_ID}-input.png` (input close-up)
* `{TC_ID}-output.png` (output close-up)

UI screenshot:

```
screenshots/ui/
```

* `UI_0001-Pass.png` or `UI_0001-Fail.png`

---

## Files to Edit

* Functional scenarios dataset:

  * `cases.option1.js`
* Automation + CSV + screenshots + UI test:

  * `tests/translator.spec.js`

---

## Troubleshooting

### Cannot find module '../cases.option1.js'

Ensure `cases.option1.js` is in the project root (same level as `package.json`).

### Cannot use --browser option when configuration file defines projects

Use:

```bash
npx playwright test --project=chromium
```

NOT `--browser=chromium`.

### Flaky runs / page closes

Use single worker:

```bash
npx playwright test --project=chromium --workers=1
```

---


