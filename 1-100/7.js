/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let s = '';
    x = x.toString().split('');
    if (x[0] === '-') s = x.shift();
    let y = x.toReversed().join('');
    if (Number(Math.abs(y)) >= Math.pow(2, 31) - 1) return 0;
    
    return Number(s + y);
}