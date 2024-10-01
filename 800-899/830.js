/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
	let arr = s.split("");
	let storedIndex = [];
	let count = 1;

	for (let y = 1; y < arr.length + 1; y++) {
		if (arr[y - 1] == arr[y]) {
			count++;
		} else {
			if (count >= 3) {
				let range = [y - count, y - 1];
				storedIndex.push(range);
			}
			count = 1;
		}
	}

	return storedIndex;
};
