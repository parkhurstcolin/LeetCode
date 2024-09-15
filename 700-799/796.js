/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
	if (s.length != goal.length) return false;
	let ltr = "";
	let arr = s.split("");

	for (let y = 0; y < s.length; y++) {
		if (arr.join("") === goal) return true;
		let ltr = arr.shift();
		arr.push(ltr);
	}
	return false;
};
