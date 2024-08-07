/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	let directory = path.split("/");

	for (let y = 0; y < directory.length; y++) {
		if (directory[y] == "..") {
			if (y != 0) {
				directory.splice(y - 1, 2);
				y -= 2;
			} else {
				directory.splice(y, 1);
				y--;
			}
		}
		if (directory[y] == ".") directory.splice(y, 1), y--;
		if (directory[y] == "") directory.splice(y, 1), y--;
	}

	return "/" + directory.join("/");
};
