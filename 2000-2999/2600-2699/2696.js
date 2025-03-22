/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let upperCase = s.split("");
  let y = 0;
  while (y < upperCase.length) {
    if (
      /AB/.test(upperCase[y] + upperCase[y + 1]) ||
      /CD/.test(upperCase[y] + upperCase[y + 1])
    ) {
      upperCase.splice(y, 2);
      y = 0;
    } else {
      y++;
    }
  }

  return upperCase.length;
};
