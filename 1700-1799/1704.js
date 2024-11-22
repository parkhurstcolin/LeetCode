/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
	const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
	let size = s.length;
	let count = 0;

	for (let index = 0; index < size / 2; index++) {
		if (vowels.has(s[index])) count++;

		if (vowels.has(s[index + size / 2])) count--;
	}

	return count == 0;
};
