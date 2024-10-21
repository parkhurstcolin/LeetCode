/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
	let arr = text.split(" ");
	let store = [];

	for (let y = 0; y < arr.length; y++) {
		if (arr[y] == first && arr[y + 1] == second) {
			if (arr[y + 2] != null) {
				store.push(arr[y + 2]);
			}
		}
	}

	return store;
};
