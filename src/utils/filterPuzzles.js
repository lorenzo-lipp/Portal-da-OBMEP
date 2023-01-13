import challenges from "/src/utils/challenges.js";

function normalizeString(str) {
  return str.toLowerCase()
    .trim()
    .replace("1", "i")
    .replace("2", "ii")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function filterPuzzles(level, search) {
  if (!search) return (value) => challenges[value].level === level;
  
  search = normalizeString(search);
  
  let regex = new RegExp(`^${search}|\\W${search}`);
  
  return (value) => challenges[value].level === level && normalizeString(challenges[value].name).match(regex);
}