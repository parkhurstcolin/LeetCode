/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const map = new Map([
  ["00", 0],
  ["01", 60],
  ["02", 120],
  ["03", 180],
  ["04", 240],
  ["05", 300],
  ["06", 360],
  ["07", 420],
  ["08", 480],
  ["09", 540],
  ["10", 600],
  ["11", 660],
  ["12", 720],
  ["13", 780],
  ["14", 840],
  ["15", 900],
  ["16", 960],
  ["17", 1020],
  ["18", 1080],
  ["19", 1140],
  ["20", 1200],
  ["21", 1260],
  ["22", 1320],
  ["23", 1380],
]);

var convertTime = function (current, correct) {
  current = current.split(":");
  correct = correct.split(":");
  let operations = 0;
  let HH = map.get(correct[0]);
  let MM = Number(correct[1]);
  let goal = HH + MM;
  HH = map.get(current[0]);
  MM = Number(current[1]);
  let time = HH + MM;
  while (time != goal) {
    if (time + 60 <= goal) {
      time += 60;
      operations++;
    } else if (time + 15 <= goal) {
      time += 15;
      operations++;
    } else if (time + 5 <= goal) {
      time += 5;
      operations++;
    } else if (time + 1 <= goal) {
      time += 1;
      operations++;
    }
  }
  return operations;
};
