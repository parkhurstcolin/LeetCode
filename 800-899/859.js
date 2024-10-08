/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
	if (A.length != B.length) return false;
	const diff = [];

	for (let i = 0; i < A.length; i++) {
		if (A[i] != B[i]) diff.push(i);
		if (diff.length > 2) return false;
	}
	if (!diff.length) return A.length != [...new Set(A)].length;
	const [i, j] = diff;
	return A[i] == B[j] && B[i] == A[j];
};
