/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
	let map = new Map();
	let arr = [];
	for (let y = 0; y < words.length; y++) {
		let word = words[y];
		word = word.split("");
		while (word.length != 0) {
			let c = word.shift();
			if (map.has(c)) {
				map.set(c, map.get(c) + 1);
			} else {
				if (!arr.includes(c)) {
					arr.push(c);
					map.set(c, 1);
				}
			}
		}
	}

	while (arr.length != 0) {
		let c = arr.shift();
		let n = map.get(c) % words.length;
		if (n != 0) return false;
	}

	return true;
};
