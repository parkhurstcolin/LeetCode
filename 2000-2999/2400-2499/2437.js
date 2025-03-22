/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  time = time.split(":");
  let number = 1;
  let hour = time[0].split("");
  let minute = time[1].split("");

  if (hour[0] == "?" && hour[1] == "?") {
    number = number * 24;
  } else {
    if (hour[0] == "?") {
      number = hour[1] >= 4 ? number * 2 : number * 3;
    }
    if (hour[1] == "?") {
      number = hour[0] == 2 ? number * 4 : number * 10;
    }
  }

  if (minute[0] == "?" && minute[1] == "?") {
    number = number * 60;
  } else {
    if (minute[0] == "?") number = number * 6;
    if (minute[1] == "?") number = number * 10;
  }

  return number;
};
