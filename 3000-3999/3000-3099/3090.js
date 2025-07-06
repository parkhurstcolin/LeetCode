/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let longest = 1;
  s = s.split("");

  for (let y = 0; y < s.length; y++) {
    let map0 = new Map();
    map0.set(s[y], 1);
    for (let x = y + 1; x < s.length; x++) {
      let n = map0.get(s[x]) ?? 0;
      if (n === 2) break;
      map0.set(s[x], n + 1);
      if (x - y === longest) longest++;
    }
  }
  return longest;
};
