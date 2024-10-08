/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n === 0) return false;
	if (n === 1) return true;

	if (!(n % 3)) return isPowerOfThree(n / 3);

	return false;
};
