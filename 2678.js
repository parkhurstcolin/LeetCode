/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
	let num = 0;
	for (let y = 0; y < details.length; y++) {
		if (details[y].at(11) + details[y].at(12) > 60) num++;
	}
	return num;
};
