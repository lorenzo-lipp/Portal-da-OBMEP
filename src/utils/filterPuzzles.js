import challenges from "/src/utils/challenges.js";

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
    if (!keywords.length) return (value) => challenges[value].level === level;
    else return (value) => challenges[value].level === level && hasAllElements(keywords, challenges[value].keywords);
  }

  search = normalizeString(search);

  let regex = new RegExp(`^${search}|\\W${search}`);

  if (!keywords.length) return (value) => challenges[value].level === level && normalizeString(challenges[value].name).match(regex);
  return (value) => challenges[value].level === level && normalizeString(challenges[value].name).match(regex) && hasAllElements(keywords, challenges[value].keywords);
}