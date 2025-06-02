/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let right = 0;
    let left = 0;
    nums.forEach((a) => (right += a));

    for(let i = 0; i < nums.length; i++){
        let c = nums[i];
        right -= c;
        if (right == left) return i;
        left += c;
    }
    return -1
};