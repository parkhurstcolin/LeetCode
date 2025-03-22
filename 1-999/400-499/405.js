/**
 * @param {number} num
 * @return {string}
 */

var toHex = function (num) {
	num = num < 0 ? (~-num + 1) >>> 0 : num;

	const hex = [];
	while (num >= 16) {
		hex.unshift(num % 16);
		num = Math.floor(num / 16);
	}
	hex.unshift(num);

	return hex.map((e) => "0123456789abcdef"[e]).join``;
};
