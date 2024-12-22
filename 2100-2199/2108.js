/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }
  return "";
};

function isPalindrome(word) {
  for (
    let i = 0, k = word.length - 1;
    i < Math.floor(word.length / 2);
    i++, k--
  ) {
    if (word[i] !== word[k]) return false;
  }
  return true;
}
