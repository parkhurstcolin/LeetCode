/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
	command = command.split("");
	for (let y = 0; y < command.length; y++) {
		if (command[y] == "(") {
			if (command[y + 1] == ")") {
				command.splice(y, 2, "o");
				("");
			} else {
				command.splice(y, 1);
				y--;
			}
		}
		if (command[y] == ")") {
			command.splice(y, 1);
			y--;
		}
	}
	return command.join("");
};
