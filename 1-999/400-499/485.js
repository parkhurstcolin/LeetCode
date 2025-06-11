/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let counter = 0;
    for(let y = 0; y < nums.length; y++){
        if(nums[y] === 1) counter++;
        else {
            if(max < counter) max = counter;
            counter = 0;
        }
    }
    if(max < counter) max = counter
    return max;
};