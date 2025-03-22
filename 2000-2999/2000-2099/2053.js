/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
//JavaScript
var kthDistinct = function (arr, k) {
	const help = new Map();
	for (let str of arr) help.set(str, (help.get(str) ?? 0) + 1);

	for (let str of arr) {
		if (help.get(str) == 1) {
			--k;
			if (k == 0) return str;
		}
	}
	return "";
};
