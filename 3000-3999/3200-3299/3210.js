/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    s = s.split('');
    let arr = [];
    for(let y = 0; y < s.length; y++){
        arr.push(s[(k + y) % s.length]);
    }
    return arr.join('');
};