/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let a = [Math.max(...nums)];
    a.push(nums.indexOf(a[0]));
    nums[a[1]] = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] * 2 > a[0]) return -1;
    }
    return a[1];
};