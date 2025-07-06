/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	let t = 0;
	n = n.toString().split("");
	let s = [];
	for (let y = n.length; y >= 0; y--) {
		s.unshift(n[y]);
		if (t == 3) {
			t = 0;
			s.unshift(".");
		}
		t++;
	}
	if (s[0] == ".") s.shift();
	return s.join("");
};
