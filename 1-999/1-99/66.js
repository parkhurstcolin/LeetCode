/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    digits.unshift(0);
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] != 10) break;
        digits[i] = 0;
        digits[i - 1] += 1;
    }
    if(digits[0] == 0) digits.shift()
    return digits
};