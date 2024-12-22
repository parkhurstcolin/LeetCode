/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let map = new Map();
  let s = "";
  word1 = word1.split("");
  word2 = word2.split("");
  for (let y = 0; y < word1.length; y++) {
    let c = word1[y];
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
    if (!s.includes(c)) s += c;
    c = word2[y];
    if (map.has(c)) map.set(c, map.get(c) - 1);
    else map.set(c, -1);
    if (!s.includes(c)) s += c;
  }
  s = s.split("");
  for (let y = 0; y < s.length; y++) {
    if (Math.abs(map.get(s[y])) > 3) return false;
  }
  return true;
};
