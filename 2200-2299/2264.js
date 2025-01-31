/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let n = "";
  num = num.split("");
  for (let y = 0; y < num.length - 2; y++) {
    if (num[y] == num[y + 1] && num[y] == num[y + 2]) {
      if (num[y] > n) n = num[y];
    }
  }
  return String(n + n + n);
};
