/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
	let count = 0;
	let s = text.split("");
	let balloon = "balloon";
	let b = balloon.split("");

	for (let y = s.length; y > 0; y--) {
		if (s.includes(b[0])) {
			let n = s.indexOf(b[0]);
			s.splice(n, 1);
			b.shift();
		} else {
			break;
		}
		if (b.length == 0) {
			count++;
			b = balloon.split("");
		}
	}

	return count;
};
