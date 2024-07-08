/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let x = 0;
	let y = 1;
  let broken = false;
	while (x < nums.length) {
		while (y < nums.length) {
			if (nums[x] === nums[y] && x !== y) {
				broken = true;
			}
			y++;
		}
		if (!broken) return nums[x];
		broken = false;
		x++;
		y = 0;
	}
	return nums[x - 1];
};

/*
  1.
*/