import puzzleData from "/src/data/puzzleData";

export default function sortPuzzles(a,b) {
  if (puzzleData[a].new === puzzleData[b].new) return puzzleData[a].name > puzzleData[b].name ? 1 : -1;
  if (puzzleData[a].new && !puzzleData[b].new) return -1;
  if (!puzzleData[a].new && puzzleData[b].new) return 1;
}