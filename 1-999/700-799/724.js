/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let left = 0;
        let right = 0;
        nums.slice(0, i).forEach((a) => left += a)
        nums.slice(i + 1).forEach((a) => right += a)
        if(right == left) return i
    }
    return -1
};