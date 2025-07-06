/**
 * @param {string} password
 * @return {boolean}
 */
const lowerRegex = /[a-z]/;
const upperRegex = /[A-Z]/;
const numRegex = /[0-9]/;
const charRegex = /[!@#$%^&*()+-]/;

var strongPasswordCheckerII = function (password) {
  if (
    !lowerRegex.test(password) ||
    !upperRegex.test(password) ||
    !numRegex.test(password) ||
    !charRegex.test(password)
  )
    return false;
  password = password.split("");
  if (password.length < 8) return false;
  for (let y = 1; y < password.length - 1; y++) {
    if (password[y] === password[y + 1] || password[y] === password[y - 1])
      return false;
  }
  return true;
};
