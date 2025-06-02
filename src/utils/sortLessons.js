function normalizeString(str) {
  return str.toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function sortLessons(lessonData) {
  return (a,b) => normalizeString(lessonData[a].name) > normalizeString(lessonData[b].name) ? 1 : -1;
}