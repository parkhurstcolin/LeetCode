/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  sentence = sentence.split(" ");
  let word1 = sentence[sentence.length - 1];

  for (let y = 0; y < sentence.length; y++) {
    let word2 = sentence[y];
    if (word1.charAt(word1.length - 1) != word2.charAt(0)) return false;
    word1 = word2;
  }
  return true;
};
