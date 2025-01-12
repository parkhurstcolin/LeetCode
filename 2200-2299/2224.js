/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */

var convertTime = function (current, correct) {
  current = current.split(":");
  correct = correct.split(":");
  let operations = 0;
  let goal = Number(Number(correct[0]) * 60) + Number(correct[1]);
  let time = Number(Number(current[0]) * 60) + Number(current[1]);
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