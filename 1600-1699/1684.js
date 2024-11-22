/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let count = 0;
	for (let y = 0; y < words.length; y++) {
		let word = words[y].split("");
		for (let x = 0; x < word.length; x++) {
			while (allowed.includes(word[x])) word.splice(x, 1);
		}
		if (word.length == 0) count++;
	}
	return count;
};
