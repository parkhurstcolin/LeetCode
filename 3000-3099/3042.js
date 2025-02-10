/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let counter = 0;
  for (let y = 0; y < words.length; y++) {
    let str1 = words[y];
    for (let x = y + 1; x < words.length; x++) {
      let str2 = words[x];
      if (
        str1 === str2.substring(0, str1.length) &&
        str1 === str2.substring(str2.length - str1.length)
      )
        counter++;
    }
  }
  return counter;
};
