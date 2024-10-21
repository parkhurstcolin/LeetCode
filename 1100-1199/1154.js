/**
 * @param {string} date
 * @return {number}
 */
let month = new Map([
	["01", 0],
	["02", 31],
	["03", 59],
	["04", 90],
	["05", 120],
	["06", 151],
	["07", 181],
	["08", 212],
	["09", 243],
	["10", 273],
	["11", 304],
	["12", 334],
]);

var dayOfYear = function (date) {
	let spl = date.split("-");
	let n = Number(spl[2]) + month.get(spl[1]);

	if (Number(spl[0]) % 4 == 0 && Number(spl[1]) > 2) {
		if (spl[0] % 100 == 0) {
			if (spl[0] % 400 == 0) return n + 1;
			return n;
		}
		return n + 1;
	} else {
		return n;
	}
};
