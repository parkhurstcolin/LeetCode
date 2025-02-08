/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  s = s.split("");
  for (let y = 0; y < s.length / 2; y++) {
    let x = s.length - y;
    if (s[y].charCodeAt(0) > s[x - 1].charCodeAt(0)) s[y] = s[x - 1];
    else s[x - 1] = s[y];
  }
  return s.join("");
};
