/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
	let count = 0;
	let wordgreedy = word;
	while (sequence.includes(wordgreedy)) {
		wordgreedy += word;
		count++;
	}
	return count;
};
