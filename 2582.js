/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
	let person = 1;
	let reversed = false;
	while (time > 0) {
		if (person < n && !reversed) {
			person++;
		} else {
			person--;
			reversed = true;
			if ((person = 1)) {
				reversed = false;
			}
		}
		time--;
	}
	return person;
};