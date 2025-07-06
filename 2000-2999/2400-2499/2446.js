/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
function hoursToMinutes(time) {
  time = time.split(":");
  return Number(time[0] * 60 + time[1]);
}
var haveConflict = function (event1, event2) {
  let e1 = [hoursToMinutes(event1[0]), hoursToMinutes(event1[1])];
  let e2 = [hoursToMinutes(event2[0]), hoursToMinutes(event2[1])];
  return !(e1[1] < e2[0] || e2[1] < e1[0]);
};
