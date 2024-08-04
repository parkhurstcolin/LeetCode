/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num == 0) return false;
	for (let y = 1; y * y <= num; y++) {
		if (y * y == num) return true;
	}
	return false;
};
