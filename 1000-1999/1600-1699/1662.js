/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
function helper(arr) {
	let str = "";
	for (let y = 0; y < arr.length; y++) {
		str += arr[y];
	}
	return str;
}

var arrayStringsAreEqual = function (word1, word2) {
	if (helper(word1) === helper(word2)) return true;
	return false;
};
