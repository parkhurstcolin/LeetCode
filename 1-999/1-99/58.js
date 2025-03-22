/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trimEnd().split(' ');
    return s.pop().length;
};