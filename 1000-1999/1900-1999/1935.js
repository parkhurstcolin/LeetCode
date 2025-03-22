/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
	let t = text.split(" ");
	let word = 0;

	for (let y = 0; y < t.length; y++) {
		let s = t[y].split("");
		for (let x = 0; x < s.length; x++) {
			if (brokenLetters.includes(s[x])) {
				word++;
				break;
			}
		}
	}
	return t.length - word;
};
