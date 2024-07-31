/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n == 1) return true;
	while (n !== 2) {
		if (n < 2) return false;
		n = n / 2;
	}
	return true;
};
