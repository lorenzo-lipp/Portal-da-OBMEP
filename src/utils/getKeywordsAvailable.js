import puzzleData from "/src/data/puzzleData.json";

export default function getKeywordsAvailable() {
  let keywords = new Set();
  for (let puzzle of Object.keys(puzzleData)) {
    if (!puzzleData[puzzle].keywords) continue;
    for (let keyword of puzzleData[puzzle].keywords) {
      keywords.add(keyword);
    }
  }
  return Array.from(keywords).sort();
}