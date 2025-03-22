/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	if (n == 0) return [];
	let fizzBuzz = "";
	let count = ["1"];
	for (let y = 2; y <= n; y++) {
		fizzBuzz = "";
		if (y % 3 == 0) fizzBuzz = "Fizz";
		if (y % 5 == 0) fizzBuzz += "Buzz";
		if (fizzBuzz !== "") {
			count.push(fizzBuzz);
		} else {
			count.push(y + "");
		}
	}
	return count;
};
