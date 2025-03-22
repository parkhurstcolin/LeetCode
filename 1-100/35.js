/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function binarySearch(n, x) {
    let l = 0,
      r = n.length - 1;
    let m = l + Math.floor((r - l) / 2);
    while (l <= r) {
      m = l + Math.floor((r - l) / 2);
      if (n[m] === x) return m;
      else if (n[m] < x) l = m + 1;
      else r = m - 1;
    }
    return m;
  }
  let i = binarySearch(nums, target);
  if (nums[i] < target) return i + 1;
  return i;
};