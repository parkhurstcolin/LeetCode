/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  while (left <= right) {
    let word = words[left].split("");
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) count++;
    left++;
  }
  return count;
};
