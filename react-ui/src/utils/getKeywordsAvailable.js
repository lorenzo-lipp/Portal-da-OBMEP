export default function getKeywordsAvailable(puzzleData) {
  let keywords = new Set();
  for (let puzzle of Object.keys(puzzleData)) {
    if (!puzzleData[puzzle].keywords) continue;
    for (let keyword of puzzleData[puzzle].keywords) {
      keywords.add(keyword);
    }
  }
  return Array.from(keywords).sort();
}