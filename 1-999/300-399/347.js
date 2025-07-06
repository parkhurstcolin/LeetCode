/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length == k) return nums
    let mapOne = new Map;
    let mapTwo = new Map;
    for(let i = 0; i < nums.length; i++){
        mapOne.set(nums[i], (mapOne.get(nums[i]) || 0) + 1)
        mapTwo.set(mapOne.get(nums[i]), (mapTwo.get(mapOne.get(nums[i])) || []).concat(nums[i]))
    }
    for(let i = 1; i < nums.length; i++){
        if(mapTwo.get(i).length == k) return mapTwo.get(i)
    }
};