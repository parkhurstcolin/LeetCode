/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  s = s.split("");
  let c = s[0].toLowerCase();
  let numKeyChange = 0;
  for (let y = 1; y < s.length; y++) {
    if (c !== s[y].toLowerCase()) {
      numKeyChange++;
      c = s[y].toLowerCase();
    }
  }
  return numKeyChange;
};
