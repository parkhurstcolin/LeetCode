/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  const regex = /[a-z]/gi;
  let max = 0;
  for (let y = 0; y < strs.length; y++) {
    if (!regex.test(strs[y])) {
      if (Number(strs[y]) > max) max = Number(strs[y]);
    } else {
      if (strs[y].length > max) max = strs[y].length;
    }
  }
  return max;
};
