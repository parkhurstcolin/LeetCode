/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  s = s.split("");
  let store = [];
  while (s.length != 0) {
    let word = "";
    let x = k;
    while (x != 0) {
      if (s.length != 0) word += s.shift();
      else word += fill;
      x--;
    }
    store.push(word);
  }
  return store;
};