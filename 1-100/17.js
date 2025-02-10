/**
 * @param {string} digits
 * @return {string[]}
 */
const phoneMap = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  digits = digits.split("");
  let store = [""];
  function dial(c) {
    if (c.length == 0) return;
    let d = phoneMap.get(c.shift());
    let s = store;
    store = [];
    for (let y = 0; y < s.length; y++) {
      d.forEach((i) => store.push(s[y] + i));
    }
    dial(c);
  }
  dial(digits);
  return store;
};
