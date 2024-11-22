/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
	let spaces = text.replace(/[^\s]/g, "").length;
	let words = text.trim().split(/ +/);
	let n = words.length - 1;

	if (!n) return words[0] + " ".repeat(spaces);
	return words.join(" ".repeat(spaces / n)) + " ".repeat(spaces % n);
};
