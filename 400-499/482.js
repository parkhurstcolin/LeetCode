/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
	//  Eliminate all dashes
	const regex = /\-/g;
	s = s.replace(regex, "");

	let head = s.length % k;

	let grouping = [];

	// Special handle for first group
	if (head) {
		grouping.push(s.substring(0, head));
	}

	// General cases:
	for (let i = head; i < s.length; i += k) {
		grouping.push(s.substring(i, i + k));
	}

	return grouping.join("-").toUpperCase();
};
