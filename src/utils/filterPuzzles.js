import puzzleData from "/src/data/puzzleData.json";

function normalizeString(str) {
  return str.toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasAllElements(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  let commonElements = 0;
  for (let element of arr1) {
    if (arr2.includes(element)) commonElements++;
  }
  return commonElements === arr1.length;
}

export default function filterPuzzles(level, search, keywords) {
  if (!search) {
    if (!keywords.length) return (value) => puzzleData[value].level === level;
    else return (value) => puzzleData[value].level === level && hasAllElements(keywords, puzzleData[value].keywords);
  }

  search = normalizeString(search);

  let regex = new RegExp(`^${search}|\\W${search}`);

  if (!keywords.length) return (value) => puzzleData[value].level === level && normalizeString(puzzleData[value].name).match(regex);
  return (value) => puzzleData[value].level === level && normalizeString(puzzleData[value].name).match(regex) && hasAllElements(keywords, puzzleData[value].keywords);
}