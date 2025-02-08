/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let array = [];
  for (let y = 0; y < words.length; y++) {
    let word = words[y].split(separator);
    while (word.length != 0) {
      if (word[0] != "") array.push(word.shift());
      else word.shift();
    }
  }
  return array;
};
