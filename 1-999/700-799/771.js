/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	let count = 0;
	for (a of stones) {
		for (b of jewels) {
			b === a ? count++ : 0;
		}
	}
	return count;
};
