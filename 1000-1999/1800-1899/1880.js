/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const map = new Map([
	["a", "0"],
	["b", "1"],
	["c", "2"],
	["d", "3"],
	["e", "4"],
	["f", "5"],
	["g", "6"],
	["h", "7"],
	["i", "8"],
	["j", "9"],
	["k", "10"],
	["l", "11"],
	["m", "12"],
	["n", "13"],
	["o", "14"],
	["p", "15"],
	["q", "16"],
	["r", "17"],
	["s", "18"],
	["t", "19"],
	["u", "20"],
	["v", "21"],
	["w", "22"],
	["x", "23"],
	["y", "24"],
	["z", "25"],
]);

function helper(s) {
	s = s.split("");
	for (let i = 0; i < s.length; i++) {
		s[i] = map.get(s[i]);
	}
	while (s[0] == "0") s.shift();
	if (s.length == 0) return 0;
	return Number(s.join(""));
}

var isSumEqual = function (firstWord, secondWord, targetWord) {
	let a = helper(firstWord);
	let b = helper(secondWord);
	let c = helper(targetWord);
	if (a + b == c) return true;
	return false;
};
