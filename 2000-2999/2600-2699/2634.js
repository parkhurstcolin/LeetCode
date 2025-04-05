/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let a = [];
    for(let y = 0; y < arr.length; y++){
        if(fn(arr[y], y))  a.push(arr[y])
    }
    return a;
};