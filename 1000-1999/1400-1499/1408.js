/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	let store = [];

	for (let y = 0; y < words.length; y++) {
		let x = 0;
		while (x < words.length) {
			if (words[x].includes(words[y]) && x != y) {
				store.push(words[y]);
				break;
			}
			x++;
		}
	}
	return store;
};
