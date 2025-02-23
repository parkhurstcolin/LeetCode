/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    s = s.split('')
    let c = Math.abs(s[0].charCodeAt(0) - s[1].charCodeAt(0));
    for(let y = 2; y < s.length; y++){
        c += Math.abs(s[y].charCodeAt(0) - s[y-1].charCodeAt(0))
    }
    return c
};