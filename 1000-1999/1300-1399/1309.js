/**
 * @param {string} s
 * @return {string}
 */
const map = new Map([
	["1", "a"],
	["2", "b"],
	["3", "c"],
	["4", "d"],
	["5", "e"],
	["6", "f"],
	["7", "g"],
	["8", "h"],
	["9", "i"],
	["10#", "j"],
	["11#", "k"],
	["12#", "l"],
	["13#", "m"],
	["14#", "n"],
	["15#", "o"],
	["16#", "p"],
	["17#", "q"],
	["18#", "r"],
	["19#", "s"],
	["20#", "t"],
	["21#", "u"],
	["22#", "v"],
	["23#", "w"],
	["24#", "x"],
	["25#", "y"],
	["26#", "z"],
]);
var freqAlphabets = function (s) {
	let str = s.split("");
	let store = [];
	for (let y = 0; y < str.length; y++) {
		if (str[y + 2] == "#") {
			store.push(map.get(str[y] + str[y + 1] + str[y + 2]));
			y += 2;
		} else {
			store.push(map.get(str[y]));
		}
	}
	return store.join("");
};
