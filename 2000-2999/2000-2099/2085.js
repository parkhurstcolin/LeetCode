/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const map1 = new Map();
  const map2 = new Map();
  let count = 0;

  for (const word of words1) {
    map1.set(word, map1.get(word) + 1 || 1);
  }
  for (const word of words2) {
    map2.set(word, map2.get(word) + 1 || 1);
  }
  for (const word of words1) {
    if (map1.get(word) === 1 && map2.get(word) === 1) count++;
  }

  return count;
};
