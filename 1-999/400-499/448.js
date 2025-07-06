/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let numSet = new Set(nums)
    let resultArr = []
    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) resultArr.push(i);
    }

    return resultArr;
};