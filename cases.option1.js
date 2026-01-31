// cases.option1.js
// SwiftTranslator (Option 1): Singlish -> Sinhala
// 24 POS + 14 NEG functional scenarios
// UI scenario remains in translator.spec.js (UI_0001)

module.exports = [
  // =========================
  // POSITIVE (24)
  // =========================
  {
    id: "Pos_Fun_0001",
    name: "Short daily greeting question",
    lenType: "S",
    input: "oyata kohomadha?",
    expected: "ඔයාට කොහොමද?",
    justification:
      "Meaning preserved; correct Sinhala spelling; question mark remains correctly placed.",
    covered:
      "Daily language usage → Greeting/response → Interrogative → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0002",
    name: "Formal greeting",
    lenType: "S",
    input: "ayubowan obata",
    expected: "ආයුබෝවන් ඔබට",
    justification:
      "Common formal greeting; correct Sinhala output with proper spacing.",
    covered:
      "Common greetings → Polite/formal phrasing → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0003",
    name: "Short morning greeting",
    lenType: "S",
    input: "suba udhaasanak",
    expected: "සුබ උදෑසනක්",
    justification:
      "Common greeting phrase; accurate Sinhala conversion.",
    covered:
      "Daily language usage → Greeting → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0004",
    name: "Polite request with English 'please' (mixed)",
    lenType: "M",
    input: "please mata tikak udav karanna.",
    expected: "please මට ටිකක් උදව් කරන්න.",
    justification:
      "English 'please' remains; Sinhala request accurate; punctuation preserved.",
    covered:
      "Mixed Singlish + English → Polite request → Imperative → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0005",
    name: "Polite request using karunakara",
    lenType: "M",
    input: "karunakara poddak inna.",
    expected: "කරුණාකර පොඩ්ඩක් ඉන්න.",
    justification:
      "Polite marker preserved; imperative/request form correct.",
    covered:
      "Request forms (politeness) → Imperative → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0006",
    name: "Simple present tense daily sentence",
    lenType: "S",
    input: "mama gedara yanava",
    expected: "මම ගෙදර යනවා",
    justification:
      "Simple sentence; present tense preserved; common daily usage.",
    covered:
      "Sentence structures → Simple → Present tense → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0007",
    name: "Simple request (need water)",
    lenType: "S",
    input: "mata wathura ona",
    expected: "මට වතුර ඕන",
    justification:
      "Daily request phrase; accurate conversion; natural Sinhala.",
    covered:
      "Daily usage → Requests → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0008",
    name: "Imperative command (short)",
    lenType: "S",
    input: "pahatha balanna.",
    expected: "පහත බලන්න.",
    justification:
      "Command preserved; punctuation kept; correct Sinhala.",
    covered:
      "Imperative (command) → Punctuation → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0009",
    name: "Negative form (cannot come)",
    lenType: "S",
    input: "mama enna bae",
    expected: "මම එන්න බැහැ",
    justification:
      "Negation pattern preserved; correct negative form.",
    covered:
      "Positive vs negative → Negation patterns → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0010",
    name: "Past tense simple sentence",
    lenType: "S",
    input: "mama gedara giyaa",
    expected: "මම ගෙදර ගියා",
    justification:
      "Past tense preserved; accurate daily expression.",
    covered:
      "Tense variations → Past → Simple sentence → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0011",
    name: "Future intention with time reference",
    lenType: "S",
    input: "heta mama ennam",
    expected: "හෙට මම එන්නම්",
    justification:
      "Future intention preserved; time word correctly mapped.",
    covered:
      "Tense variations → Future → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0012",
    name: "Plural pronoun daily plan",
    lenType: "S",
    input: "api heta yamu",
    expected: "අපි හෙට යමු",
    justification:
      "Plural pronoun preserved; future suggestion form correct.",
    covered:
      "Plural usage/pronouns → Future (suggestion) → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0013",
    name: "Interrogative about place",
    lenType: "S",
    input: "oya kohedha inne?",
    expected: "ඔයා කොහෙද ඉන්නේ?",
    justification:
      "Question form preserved; correct Sinhala for location query.",
    covered:
      "Interrogative → Daily usage → Pronoun variation → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0014",
    name: "Compound sentence using saha",
    lenType: "M",
    input: "ammaa saha thaththaa kade giya.",
    expected: "අම්මා සහ තාත්තා කඩේ ගියා.",
    justification:
      "Compound structure preserved; connector correct; punctuation kept.",
    covered:
      "Sentence structures → Compound → Past tense → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0015",
    name: "Compound sentence using habayi",
    lenType: "M",
    input: "vassa vahinava habayi mama yanna ona.",
    expected: "වැස්ස වහිනවා හැබයි මම යන්න ඕන.",
    justification:
      "Contrast connector preserved; meaning remains; punctuation preserved.",
    covered:
      "Sentence structures → Compound (contrast) → Daily usage → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0016",
    name: "Complex sentence (cause/effect)",
    lenType: "M",
    input: "vassa vahinava nisa api gedara inna.",
    expected: "වැස්ස වහිනවා නිසා අපි ගෙදර ඉන්නවා.",
    justification:
      "Cause/effect preserved; complex structure correct.",
    covered:
      "Sentence structures → Complex → Daily usage → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0017",
    name: "Conditional / if-then style",
    lenType: "M",
    input: "salli thibboth api car ekak ganna puluwan.",
    expected: "සල්ලි තිබ්බොත් අපි car එකක් ගන්න පුළුවන්.",
    justification:
      "Conditional meaning preserved; mixed English word remains; grammar readable.",
    covered:
      "Complex sentence (conditional) → Mixed language → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0018",
    name: "Joined vs segmented word variation (question)",
    lenType: "M",
    input: "kavada da oyata enna puluvan?",
    expected: "කවදාද ඔයාට එන්න පුළුවන්?",
    justification:
      "Joined form produced; interrogative preserved; question mark retained.",
    covered:
      "Joined vs segmented variations → Interrogative → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0019",
    name: "Repeated words for emphasis",
    lenType: "S",
    input: "ikman ikman enna",
    expected: "ඉක්මන් ඉක්මන් එන්න",
    justification:
      "Repetition preserved; imperative retained; correct Sinhala.",
    covered:
      "Repeated word expressions → Imperative → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0020",
    name: "Common response (okay/yes)",
    lenType: "S",
    input: "hari hari",
    expected: "හරි හරි",
    justification:
      "Common spoken response; repetition preserved.",
    covered:
      "Common responses → Repeated words → S (≤30) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0021",
    name: "Mixed language with place + English remain",
    lenType: "M",
    input: "mama Colombo giyaa, but traffic hari.",
    expected: "මම Colombo ගියා, but traffic හරි.",
    justification:
      "Place and English words remain; Sinhala parts converted; punctuation preserved.",
    covered:
      "Mixed language → Places + common English remain → Punctuation → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0022",
    name: "English abbreviation and short forms remain",
    lenType: "M",
    input: "API test eka hari da? ok.",
    expected: "API test එක හරි ද? ok.",
    justification:
      "Abbreviation preserved; Sinhala conversion for local words; punctuation preserved.",
    covered:
      "English abbreviations/short forms → Mixed language → Punctuation → M (31–299) → Accuracy validation",
  },
  {
    id: "Pos_Fun_0023",
    name: "Punctuation + numbers + units (short/medium)",
    lenType: "M",
    input: "mama km 5k walk kala, 10:30ta awaa.",
    expected: "මම km 5k walk කළා, 10:30ට ආවා.",
    justification:
      "Numbers/time/unit remain readable; punctuation preserved; Sinhala conversion applied to other words.",
    covered:
      "Numeric formats + time + units → Punctuation → Past tense → M (31–299) → Robustness",
  },
  {
    id: "Pos_Fun_0024",
    name: "Long paragraph robustness (date/time/currency/unit + mixed)",
    lenType: "L",
    input:
      "hello! mama heta 2026-02-10 dawasata Colombo yanna inne. udeta 10:30 AM wenakota bus eka enawa kiyala hithanawa. ticket eka Rs. 2,500.00 wage. km 12k vitharai. karunakara mata message ekak danna, api meet wenna puluvan nam. thank you!",
    expected:
      "hello! මම හෙට 2026-02-10 දවසට Colombo යන්න ඉන්නේ. උදේට 10:30 AM වෙනකොට bus එක එනවා කියලා හිතනවා. ticket එක Rs. 2,500.00 වගේ. km 12k විතරයි. කරුණාකර මට message එකක් දන්න, අපි meet වෙන්න පුළුවන් නම්. thank you!",
    justification:
      "Long input should not crash; key formats (date/time/currency/unit) and English terms remain readable; Sinhala conversion consistent.",
    covered:
      "Input length → Long (≥300) → Mixed language + brand/tech terms → Date/time/currency/units → Punctuation/formatting → Robustness",
  },

  // =========================
  // NEGATIVE (14) - Failure candidates
  // =========================
  {
    id: "Neg_Fun_0001",
    name: "Joined particle may split incorrectly",
    lenType: "S",
    input: "kavada da?",
    expected: "කවදාද?",
    justification:
      "Fail if output becomes split form like 'කවද ද?' or incorrect join/spelling.",
    covered:
      "Joined vs segmented variation → Interrogative → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0002",
    name: "Negation ambiguity (nae)",
    lenType: "S",
    input: "eka hari nae",
    expected: "එක හරි නෑ",
    justification:
      "Fail if negation spelling/meaning changes or is lost.",
    covered:
      "Negation patterns → Negative form → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0003",
    name: "Slang + colloquial phrasing",
    lenType: "S",
    input: "machan uba hari da?",
    expected: "මචං උබ හරි ද?",
    justification:
      "Fail if slang/pronoun is distorted, removed, or unnatural.",
    covered:
      "Informal language → Slang/colloquial → Interrogative → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0004",
    name: "Over-segmentation extreme spacing",
    lenType: "M",
    input: "m a m a  g e d a r a  y a n a v a",
    expected: "මම ගෙදර යනවා",
    justification:
      "Fail if system cannot reconstruct tokens and outputs nonsense/no conversion.",
    covered:
      "Joined vs segmented extremes → Robustness → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0005",
    name: "Multiple spaces + tabs formatting stress",
    lenType: "M",
    input: "mama\t\tgedara    yanava",
    expected: "මම ගෙදර යනවා",
    justification:
      "Fail if whitespace causes word loss/merge or inconsistent output.",
    covered:
      "Multiple spaces → Text formatting robustness → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0006",
    name: "Line breaks / paragraph input stress",
    lenType: "M",
    input: "suba dawasak!\n\noyata kohomadha?\napi heta set wenna",
    expected: "සුබ දවසක්!\n\nඔයාට කොහොමද?\nඅපි හෙට සෙට් වෙන්න",
    justification:
      "Fail if line breaks removed or translation incomplete per line.",
    covered:
      "Line breaks + paragraph style → Formatting robustness → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0007",
    name: "Punctuation + quotes handling",
    lenType: "M",
    input: 'ane! meka "hari" da? (sure?)',
    expected: 'අනේ! මේක "හරි" ද? (sure?)',
    justification:
      "Fail if punctuation breaks output or English inside parentheses gets corrupted.",
    covered:
      "Punctuation marks → Mixed English → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0008",
    name: "English abbreviation should remain (API)",
    lenType: "S",
    input: "API test eka hari da?",
    expected: "API test එක හරි ද?",
    justification:
      "Fail if 'API' is converted to Sinhala letters or casing/format breaks.",
    covered:
      "English abbreviations/short forms → Mixed content → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0009",
    name: "Brand/tech term preservation (YouTube)",
    lenType: "M",
    input: "mama YouTube eke video ekak baluwa.",
    expected: "මම YouTube එකේ video එකක් බැලුවා.",
    justification:
      "Fail if brand/English nouns are over-converted or spacing breaks.",
    covered:
      "English technical/brand terms → Past tense → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0010",
    name: "Currency numeric formatting stress",
    lenType: "M",
    input: "Rs. 2,500.00 dennam, habayi 2 dinakin.",
    expected: "Rs. 2,500.00 දෙන්නම්, හැබයි 2 දිනකින්.",
    justification:
      "Fail if commas/decimals/digits are altered or formatting breaks.",
    covered:
      "Currency formats → Numeric formats + punctuation → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0011",
    name: "Time format stress",
    lenType: "S",
    input: "oya 10:30 PM enawada?",
    expected: "ඔයා 10:30 PM එනවද?",
    justification:
      "Fail if time/PM is converted or corrupted.",
    covered:
      "Time formats → Interrogative → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0012",
    name: "Date format stress",
    lenType: "S",
    input: "2026-02-10 dawasata enna",
    expected: "2026-02-10 දවසට එන්න",
    justification:
      "Fail if date is broken/partially converted or loses formatting.",
    covered:
      "Date formats → Imperative/request → S (≤30) → Failure detection",
  },
  {
    id: "Neg_Fun_0013",
    name: "Units of measurement stress",
    lenType: "M",
    input: "km 18k wage yanna wenawa.",
    expected: "km 18k වගේ යන්න වෙනවා.",
    justification:
      "Fail if unit 'km' or numeric pattern is altered incorrectly.",
    covered:
      "Units of measurement → Numeric formats → M (31–299) → Failure detection",
  },
  {
    id: "Neg_Fun_0014",
    name: "Long noisy mixed input (abbr/brand/phone/date/time/currency/unit)",
    lenType: "L",
    input:
      "machan, mama tomorrow Colombo yanna inne. Google Maps on karala route eka balanna one. ETA 45min kiyala pennanawa, but bus late. pls call me 0712345678; api 2026-02-10 10:30 AM meet wenna. Rs. 3,000.00 wage ganna wenawa, km 18k.",
    expected:
      "මචං, මම tomorrow Colombo යන්න ඉන්නේ. Google Maps on කරලා route එක බලන්න ඕනේ. ETA 45min කියලා පේන්නවා, but bus late. pls call me 0712345678; අපි 2026-02-10 10:30 AM meet වෙන්න. Rs. 3,000.00 වගේ ගන්න වෙනවා, km 18k.",
    justification:
      "Fail if English/abbr terms are over-converted, formats corrupted, or truncation occurs due to long/noisy input.",
    covered:
      "Long input (≥300) → Mixed language → Abbreviations/brand terms → Numbers/date/time/currency/units → Robustness → Failure detection",
  },
];
