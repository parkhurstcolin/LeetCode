/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
	let vocab = paragraph
		.toLowerCase()
		.replace(/[^\w\s]/g, " ")
		.split(" ");
	let frequency = {};
	for (const word of vocab) {
		if (!banned.includes(word) && word !== "") {
			frequency[word] = (frequency[word] || 0) + 1;
		}
	}
	console.log(frequency);
	let max = -Infinity;
	let result = "";
	for (const word in frequency) {
		if (frequency[word] > max) {
			result = word;
			max = frequency[word];
		}
	}
	return result;
};
