/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let b = false;
  s = s.split("");
  for (let y = 0; y < s.length; y++) {
    if (s[y] == "b" && !b) b = true;
    if (s[y] == "a" && b) return false;
  }
  return true;
};
