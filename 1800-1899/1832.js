/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
	let arr = [];
	sentence = sentence.split("");

	for (let y = 0; y < sentence.length; y++) {
		if (!arr.includes(sentence[y])) {
			arr.push(sentence[y]);
		}
		if (arr.length > 25) break;
	}

	if (arr.length > 25) return true;
	return false;
};
