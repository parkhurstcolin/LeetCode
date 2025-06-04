/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let a = new Array(nums.length);
    let odds = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0) a[i - odds] = nums[i]
        else {
            odds++;
            a[a.length - odds] = nums[i]
        } 
    }
    return a;
};