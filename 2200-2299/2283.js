/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  let map = {};
  for (let char of num) {
    if (map[char]) map[char]++;
    else map[char] = 1;
  }

  for (let i = 0; i < num.length; i++) {
    if (!map[i] && num[i] == 0) continue;
    if (map[i] != num[i]) return false;
  }
  return true;
};
