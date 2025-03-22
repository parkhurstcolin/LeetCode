/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
	let n = k;
	s = s.split(" ");
	let sentence = [];
	while (n != 0) {
		sentence.push(s[k - n]);
		n--;
	}
	return sentence.join(" ");
};
