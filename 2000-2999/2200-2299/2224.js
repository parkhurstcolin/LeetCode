/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  current = current.split(":");
  correct = correct.split(":");
  let HH = Number(correct[0] - current[0]) * 60;
  let MM = Number(correct[1] - current[1]);
  let num = HH + MM;
  let operations = 0;
  while (num != 0) {
    operations++;
    if (num >= 60) {
      num -= 60;
    } else if (num >= 15) {
      num -= 15;
    } else if (num >= 5) {
      num -= 5;
    } else if (num >= 1) {
      num -= 1;
    }
  }
  return operations;
};