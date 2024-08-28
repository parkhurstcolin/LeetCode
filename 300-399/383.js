/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const arr = new Array(26).fill(0);
	for (let i = 0; i < magazine.length; i++) arr[magazine.charCodeAt(i) - 97]++;

	for (let i = 0; i < ransomNote.length; i++) {
		const arrIdx = ransomNote.charCodeAt(i) - 97;
		if (arr[arrIdx] === 0) return false;
		arr[arrIdx]--;
	}

	return true;
};
