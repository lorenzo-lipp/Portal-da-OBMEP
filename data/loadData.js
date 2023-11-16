import fs from 'fs';

function stringifyRaw(fileBuffer) {
  return JSON.stringify(JSON.parse(fileBuffer));
}

export default {
  "lesson": stringifyRaw(fs.readFileSync(process.cwd() + "/data/lessonData.json")),
  "puzzle": stringifyRaw(fs.readFileSync(process.cwd() + "/data/puzzleData.json")),
  "video": stringifyRaw(fs.readFileSync(process.cwd() + "/data/videoData.json"))
};