/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
	let count = 0;
	for (let y = 0; y < patterns.length; y++) {
		let w = patterns[y];
		if (word.includes(w)) count++;
	}
	return count;
};
