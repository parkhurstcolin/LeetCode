/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  s = s.split("");
  if (s.length < words.length || s.length > words.length) return false;
  for (let y = 0; y < s.length; y++) {
    let w = words.shift();
    if (s[y] != w.charAt(0)) return false;
  }
  return true;
};
