/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	if (num <= 9) return num;
	var n = 0;
	let val = num.toString().split("");
	while (val.length > 1) {
		n = 0;
		for (let y = 0; y < val.length; y++) {
			n += +val[y];
		}
		val = n.toString().split("");
	}
	return n;
}