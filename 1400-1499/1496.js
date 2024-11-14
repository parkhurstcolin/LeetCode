/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
	let coords = [];
	let y = -0;
	let x = -0;
	let robot = path.split("");

	for (let a = 0; a < robot.length; a++) {
		coords.push(x + "," + y);
		if (robot[a] == "E") x++;
		else if (robot[a] == "W") x--;
		else if (robot[a] == "N") y++;
		else y--;
		if (coords.includes(x + "," + y)) return true;
	}

	return false;
};
