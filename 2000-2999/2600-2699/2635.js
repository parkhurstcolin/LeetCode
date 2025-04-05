/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let a = Array(arr.length);
    for(let y = 0; y < arr.length; y++){
        a[y] = fn(arr[y], y)
    }
    return a;
};