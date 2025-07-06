/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let slash = true;
  let count = 0;
  s = s.split("");
  for (let y = 0; y < s.length; y++) {
    if (s[y] == "|") slash = !slash;
    if (slash && s[y] == "*") count++;
  }
  return count;
};
