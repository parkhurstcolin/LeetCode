/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd = 0;
    let even = 0;
    for(let y = 0; y < num.length; y++) y % 2 === 0 ? even += Number(num.charAt(y)) : odd += Number(num.charAt(y));
    return even == odd ? true : false;
};