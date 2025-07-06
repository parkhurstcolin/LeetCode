/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	let num = number.split(/[\s-]+/).join("");
	let l = num.length;
	let arr = [];
	for (let i = 0; i < num.length; i++) {
		if (l - i < 4 && l - i > 1) {
			arr.push(num.slice(i, l));
			break;
		} else if (l - i == 4) {
			arr.push(num.slice(i, i + 2));
			i++;
		} else {
			arr.push(num.slice(i, i + 3));
			i += 2;
		}
	}
	return arr.join("-");
};
