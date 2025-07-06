/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let store = [];
	word1 = word1.split("");
	word2 = word2.split("");

	while (0 < word1.length + word2.length) {
		store.push(word1.shift());
		store.push(word2.shift());
	}

	return store.join("");
};
