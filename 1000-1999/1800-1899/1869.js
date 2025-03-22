/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
	let count = 0;
	let zero = 0;
	let one = 0;
	s = s.split("");

	for (let i = 0; i < s.length; i++) {
		if (s[i] != s[i - 1]) count = 0;
		count++;
		if (s[i] == "0") {
			if (count > zero) zero = count;
		} else {
			if (count > one) one = count;
		}
	}

	if (one > zero) return true;
	return false;
};
