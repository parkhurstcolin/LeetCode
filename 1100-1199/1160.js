/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
	let val = 0;
	for (let y = 0; y < words.length; y++) {
		let arr = chars.split("");
		let spl = words[y].split("");
		let n = spl.length;
		for (let x = 0; x < spl.length; x++) {
			if (arr.includes(spl[x])) {
				arr.splice(arr.indexOf(spl[x]), 1);
				spl.splice(x, 1);
				x--;
			}
			if (spl.length == 0) val += n;
		}
	}

	return val;
};
