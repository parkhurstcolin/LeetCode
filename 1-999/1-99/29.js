/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let b = true;
    let n = Math.abs(dividend) / Math.abs(divisor);
    if (dividend > 0) b = !b;
    if (divisor > 0) b = !b;
    if (b) {
        if(n >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
        return Math.floor(n);
    }
    if(n >= Math.pow(2, 31)) return -Math.pow(2, 31);
    return -Math.floor(n);
};