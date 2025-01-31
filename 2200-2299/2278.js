/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  s = s.split("");
  let n = 0;
  for (let y = 0; y < s.length; y++) {
    if (s[y] == letter) n++;
  }
  return Math.floor(Number(n / s.length) * 100);
};
