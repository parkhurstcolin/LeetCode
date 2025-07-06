/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	let arr = ["", "", "", "", "", "", "", "", ""];
	s = s.split(" ");

	for (let y = 0; y < s.length; y++) {
		let t = s[y].split("");
		let n = t[t.length - 1];
		t.pop();
		arr[n] = t.join("");
	}
	return arr.join(" ").trim();
};
