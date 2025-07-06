/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (sameCharacters(words[i], words[j]) && i !== j) {
        count++;
      }
    }
  }

  return count;
};

const sameCharacters = function (wordOne, wordTwo) {
  const set1 = new Set(wordOne);
  const set2 = new Set(wordTwo);
  if (set1.size !== set2.size) {
    return false;
  }

  return [...set1].every((i) => set2.has(i));
};
