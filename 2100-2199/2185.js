/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (let y = 0; y < words.length; y++) {
    let c = pref.split("");
    let word = words[y].split("");
    let x = 0;
    while (x < c.length) {
      if (word[x] != c[x]) break;
      x++;
    }
    if (x >= c.length) count++;
  }
  return count;
};
