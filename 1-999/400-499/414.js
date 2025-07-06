/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b);
    if(nums.length < 3) return nums.pop()
    let a = []
    while(nums.length !== 0){
        let c = nums.pop()
        if(!a.includes(c)) a.push(c)
        if(a.length === 3) return a[2]
    }
    return a[0]
};