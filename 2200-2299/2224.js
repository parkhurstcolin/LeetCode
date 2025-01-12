/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */

var convertTime = function (current, correct) {
  let operations = 0;
  current = current.split(":");
  correct = correct.split(":");
  let HH = Number(correct[0] * 60) - Number(current[0] * 60);
  let MM = Number(correct[1]) - Number(current[1]);
  let num = HH + MM;
  while (num != 0) {
    if (num >= 60) {
      num -= 60;
      operations++;
    } else if (num >= 15) {
      num -= 15;
      operations++;
    } else if (num >= 5) {
      num -= 5;
      operations++;
    } else if (num >= 1) {
      num -= 1;
      operations++;
    }
  }
  return operations;
};