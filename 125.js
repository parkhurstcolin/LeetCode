/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
	let rev = "";
	for (let i = 0; i < s.length; i++) {
		rev = s[i] + rev;
	}
	if (rev == s) return true;

	return false;
};
/*
    1. Convert the letters to upper case and remove all non-alphanumeric character.
*    2. Compare s to sRev and return true if matches
*    3. Else return false
*/
