/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let y = 0; y < nums.length; y++){
        if(nums[y] >= target){
            return y;
        }
    }
    return nums.length
};

/*
    1. Create a for loop to run through nums[]
        a. Check if nums[y] >= target
            i. Return y
    2. Return nums.length
*/