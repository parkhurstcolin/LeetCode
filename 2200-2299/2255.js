/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
let countPrefixes = function (words, s) {
  // using the reduce() method to accumulate the count of valid prefixes
  return words.reduce((prefixCount, currWord) => {
    // check if 's' starts with the current word using startsWith()
    // 's.startsWith(currentWord)' returns true (1) if currentWord is a prefix, otherwise false (0)
    return prefixCount + s.startsWith(currWord);
  }, 0); //initialize prefixCount (accumulator) to 0
};
