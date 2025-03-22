/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
	let max = 0;
	for (let i = 1; i < s.length; i++) {
		let a = s.slice(0, i);
		let b = s.slice(i, s.length);
		let a1 = new RegExp("0", "g");
		let b1 = new RegExp("1", "g");
		let num = (a.match(a1) || []).length + (b.match(b1) || []).length;
		max = Math.max(max, num);
	}
	return max;
};
