/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	let b = false;
	let w = "";
	word = word.split("");
	for (let y = 0; y < word.length; y++) {
		let s = word[y];
		if (s == ch && !b) {
			b = true;
			let x = y;
			while (x >= 0) {
				s = word[x];
				w += s;
				x--;
			}
			y++;
			s = word[y];
			if (s == null) s = "";
		}
		if (b) w += s;
	}
	if (w.length == 0) return word.join("");
	return w;
};
