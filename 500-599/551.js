/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
	let attend = s.split("");
	let late = 0;
	let absent = 0;
	for (let y = 0; y < attend.length; y++) {
		if (attend[y] === "L") {
			late++;
		} else {
			late = 0;
			if (attend[y] === "A") {
				absent++;
			} else {
				late = 0;
			}
		}
		if (late >= 3 || absent >= 2) return false;
	}
	return true;
};
