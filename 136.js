/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let x = 0;
	let broken = false;
	while (x < nums.length) {
		for (let y = 1; y < nums.length; y++) {
			if (nums[x] === nums[y]) {
				broken = true;
			}
		}
		y = 1;
		if (!broken) return nums[x];
		broken = false;
		x++;
	}
	return nums[x - 1];
};

/*
  1.
*/
