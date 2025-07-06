/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let word = [];
  s = s.split("");
  for (let y = 0; y < s.length; y++) {
    if (s[y] == "i") word.reverse();
    else word.push(s[y]);
  }
  return word.join("");
};
