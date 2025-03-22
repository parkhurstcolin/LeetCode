/**
 * @param {string} coordinates
 * @return {boolean}
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
]);
var squareIsWhite = function (coordinates) {
	coordinates = coordinates.split("");
	let val = map.get(coordinates[0]) + Number(coordinates[1]);
	if (val % 2 == 0) return false;
	return true;
};
