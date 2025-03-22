/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  if (p.length == 1) return true;
  p = p.split("*");
  if (s.includes(p[0]))
    if (s.slice(s.indexOf(p[0]) + p[0].length).includes(p[1])) return true;
  return false;
};
