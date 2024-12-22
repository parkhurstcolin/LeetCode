/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  while (sentences.length != 0) {
    let word = sentences.shift();
    word = word.split(" ");
    if (word.length > max) max = word.length;
  }
  return max;
};
