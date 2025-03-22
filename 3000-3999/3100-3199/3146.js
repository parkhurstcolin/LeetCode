/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let count = 0;
    t = t.split('');
    s = s.split('');
    for(let y = 0; y < s.length; y++) {
        if(t[y] !== s[y]){
            count += Math.abs(y - t.indexOf(s[y]));
        }
    }
    return count;
};