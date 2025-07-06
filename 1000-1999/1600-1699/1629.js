/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const map = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
	["d", 4],
	["e", 5],
	["f", 6],
	["g", 7],
	["h", 8],
	["i", 9],
	["j", 10],
	["k", 11],
	["l", 12],
	["m", 13],
	["n", 14],
	["o", 15],
	["p", 16],
	["q", 17],
	["r", 18],
	["s", 19],
	["t", 20],
	["u", 21],
	["v", 22],
	["w", 23],
	["x", 24],
	["y", 25],
	["z", 26],
]);
var slowestKey = function (releaseTimes, keysPressed) {
	let keys = keysPressed.split("");
	let key = keys[0];
	let large = releaseTimes[0];

	for (let y = 1; y < releaseTimes.length; y++) {
		if (large < releaseTimes[y] - releaseTimes[y - 1]) {
			large = releaseTimes[y] - releaseTimes[y - 1];
			key = keys[y];
		}
		if (large === releaseTimes[y] - releaseTimes[y - 1]) {
			if (map.get(keys[y]) > map.get(key)) key = keys[y];
		}
	}

	return key;
};
