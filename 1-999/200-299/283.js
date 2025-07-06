/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let a = [...nums]
    let zeroes = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] == 0) {
            zeroes++;
            nums[a.length - zeroes] = 0;
        } else {
            nums[i - zeroes] = a[i];
        }
    }
}; 