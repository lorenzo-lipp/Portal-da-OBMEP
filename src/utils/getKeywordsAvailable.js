import challenges from "/src/utils/challenges.js";

export default function getKeywordsAvailable() {
  let keywords = new Set();
  for (let challenge of Object.keys(challenges)) {
    if (!challenges[challenge].keywords) continue;
    for (let keyword of challenges[challenge].keywords) {
      keywords.add(keyword);
    }
  }
  return Array.from(keywords).sort();
}