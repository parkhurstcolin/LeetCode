/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let a = new Array();
    let l = nums1.length > nums2.length ? nums1.length : nums2.length

    for(let y = 0; y < l; y++){
        if(nums1[y] !== undefined) a.push(nums1[y])
        if(nums2[y] !== undefined) a.push(nums2[y])
    }
    let num = a.sort((a,b) => a - b);

    if (num.length % 2 == 1) {
        return num[Math.floor(num.length / 2)]
    }
    
    return (num[(num.length / 2) - 1] + num[num.length / 2]) / 2
};