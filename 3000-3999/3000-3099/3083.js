/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  s = s.split("");
  let set0 = new Set();
  let set1 = new Set();

  for (let y = 1; y < s.length; y++) {
    let c = s[y] + s[y - 1];
    let r = s[y - 1] + s[y];
    if (set0.has(r) || c === r || set1.has(c)) return true;
    else set0.add(c), set1.add(r);
  }
  return false;
};
