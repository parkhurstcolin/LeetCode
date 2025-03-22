/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	s = s.split("");
	let count = 1;
	let max = 1;
	let char = s[0];

	for (let y = 1; y < s.length + 1; y++) {
		if (s[y] == char) {
			count++;
		} else {
			if (max < count) max = count;
			char = s[y];
			count = 1;
		}
	}
	return max;
};
