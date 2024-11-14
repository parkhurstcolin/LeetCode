/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
	return n % 2
		? new Array(n).fill("a").join("")
		: new Array(n - 1).fill("a").join("") + "b";
};
