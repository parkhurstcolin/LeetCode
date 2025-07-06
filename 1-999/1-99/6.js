/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  s = s.split("");
  let zig = new Array(numRows).fill("");
  let b = true;
  let row = 0;
  for (let y = 0; y < s.length; y++) {
    if (row == numRows - 1) b = true;
    if (row == 0) b = false;
    zig[row] += s[y];
    if (b) row--;
    else row++;
  }
  return zig.join("");
};
