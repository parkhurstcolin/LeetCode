/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
	let x = 0;
	let y = 0;
	let robot = moves.split("");

	for (let z = 0; z < robot.length; z++) {
		if (robot[z] == "R") x++;
		if (robot[z] == "L") x--;
		if (robot[z] == "U") y++;
		if (robot[z] == "D") y--;
	}
	if (x + y == 0 && x + x == 0) return true;
	return false;
};
