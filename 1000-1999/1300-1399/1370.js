/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	let occurences = new Map();
	for (let c of s) {
		let count = occurences.get(c) ? occurences.get(c) : 0;
		occurences.set(c, count + 1);
	}
	let arr = Array.from(new Map([...occurences.entries()].sort()));
	let i = 0,
		res = "";
	while (i < s.length) {
		for (let j = 0; j < arr.length; j++) {
			let curr = arr[j];
			if (curr[1] > 0) {
				res += curr[0];
				curr[1]--;
				i++;
			}
		}
		arr.reverse();
	}
	return res;
};
