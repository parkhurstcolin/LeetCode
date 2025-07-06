/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let c = "";
  s = s.split("");
  for (let y = 0; y < s.length; y++) {
    if (!c.includes(s[y])) c += s[y];
    else return s[y];
  }
};
