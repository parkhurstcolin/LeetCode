/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let y = 0; y < nums.length; y++) for (let x = y + 1; x < nums.length; x++) if (nums[y] + nums[x] === target) return [y, x]
};