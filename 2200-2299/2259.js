/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  number = number.split("");
  let num = number;
  let n = "";
  let store = "";
  for (let y = 0; y < num.length; y++) {
    if (num[y] == digit) {
      num[y] = "";
      store = num.join("");
      if (n < store) n = store;
      num = number;
    }
  }
  return n;
};
