/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let num = number.split("");
  let n = "";
  let store = "";
  for (let y = 0; y < num.length + 1; y++) {
    if (num[y] == digit) {
      num[y] = "";
      store = num.join("");
      if (Number(n) < Number(store)) n = store;
      num = number.split("");
    }
  }
  return n;
};