/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  s = s.split("");
  let one = [];
  let zero = [];
  let o = false;
  for (let y = 0; y < s.length; y++) {
    if (s[y] == "1") {
      if (!o) {
        zero.push(s[y]);
        o = true;
      } else {
        one.push(s[y]);
      }
    } else {
      zero.unshift(s[y]);
    }
  }
  return one.join("") + zero.join("");
};
