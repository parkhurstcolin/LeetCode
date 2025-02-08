/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;

  for (let y = 0; y < words.length; y++) {
    if (words[y] != "") {
      for (let x = y + 1; x < words.length; x++) {
        let rev = words[x].split("").reverse().join("");
        if (words[y] == rev) {
          count++;
          words[x], (words[y] = "");
          break;
        }
      }
    }
  }
  return count;
};
