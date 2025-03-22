/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let counter = 0;
    for(let y = 0; y < s.length; y++){
        let one = 0;
        let zero = 0;
        for(let x = y; x < s.length; x++){
            let c = s.charAt(x);
            if(c === '0') zero++;
            else one++;
            if(zero <= k || one <= k) counter++;
        }
    }
    return counter;
};