/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  s = s.split("");
  let t = target.split("");
  let repeat = 0;
  while (s.includes(t[0])) {
    s[s.indexOf(t.shift())] = "";
    if (t.length == 0) {
      repeat++;
      t = target.split("");
    }
  }
  return repeat;
};
