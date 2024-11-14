/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
	let prefix = searchWord.split("");
	let word = sentence.split(" ");
	for (let y = 0; y < word.length; y++) {
		let t = word[y].split("");
		for (let x = 0; x < prefix.length + 1; x++) {
			if (x == prefix.length) return y + 1;
			if (prefix[x] != t[x]) break;
		}
	}
	return -1;
};
