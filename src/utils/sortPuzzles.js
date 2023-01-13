import challenges from "/src/utils/challenges.js";

export default function sortPuzzles(a,b) {
  if (challenges[a].new === challenges[b].new) return challenges[a].name > challenges[b].name ? 1 : -1;
  if (challenges[a].new && !challenges[b].new) return -1;
  if (!challenges[a].new && challenges[b].new) return 1;
}