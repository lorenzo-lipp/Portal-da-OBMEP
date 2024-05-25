function normalizeString(str) {
  return str.toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function sortPuzzles(puzzleData) {
  return function (a,b) {
    if (puzzleData[a].new === puzzleData[b].new) return normalizeString(puzzleData[a].name) > normalizeString(puzzleData[b].name) ? 1 : -1;
    if (puzzleData[a].new && !puzzleData[b].new) return -1;
    if (!puzzleData[a].new && puzzleData[b].new) return 1;
  }
}