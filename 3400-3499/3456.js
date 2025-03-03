/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    for(let y = 0; y < s.length; y++){
        let counter = 1;
        for(let x = y + 1; s.length; x++){
            if(s.charAt(y) !== s.charAt(x)) break;
            counter++;
        }
        if(counter === k){
            let o = s.charAt(y-1) + s.charAt(y+k+1);
            if(s.charAt(y) != o.charAt(0) && s.charAt(y) != o.charAt(1)) return true;
        };
    }
    return false;
};