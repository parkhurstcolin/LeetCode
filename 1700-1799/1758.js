/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
	let counter = 0;
	s = s.split("");
	let x = s[0];

	for (let y = 1; y < s.length; y++) {
		if (s[y] == x) {
			counter++;
			if (s[y] == "0") x = "1";
			else x = "0";
		}
	}

	return counter;
};
