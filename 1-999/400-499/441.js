/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	var count = 0;
	while (n > count) {
		count++;
		n = n - count;
	}
	return count;
};
