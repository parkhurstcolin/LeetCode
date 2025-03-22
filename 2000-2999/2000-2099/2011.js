/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
	let count = 0;
	for (let y = 0; y < operations.length; y++) {
		let move = operations[y];
		if (move == "X++" || move == "++X") count++;
		else count--;
	}
	return count;
};
