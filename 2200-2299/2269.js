/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
	let n = String(num).split("");
	let count = 0;

	for (let y = 0; y < n.length; y++) {
		let store = [];
		let x = k;
		while (x > 0) {
			if (n[y + x - 1] != null) store.unshift(n[y + x - 1]);
			x--;
		}
		if (num % Number(store.join("")) == 0 && store.length == k) count++;
	}
	return count;
};
