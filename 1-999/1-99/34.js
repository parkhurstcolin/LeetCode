/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function binarySearch(a, x) {
        let l = a.indexOf(x);
        let r = a.length;
        while(l < r){
            let m = l + Math.floor((r - l) / 2)
            if(a[m + 1] !== x && a[m] == x ) return [a.indexOf(x), m]
            else if(a[m] == x) l = m;
            else r = m;
        }
        return [-1, -1]
    }
    return binarySearch(nums, target);
};