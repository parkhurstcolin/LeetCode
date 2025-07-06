/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function (nums) {
	const s = new Set(nums);
	return s.size !== nums.length;
};
