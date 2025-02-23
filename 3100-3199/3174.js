/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    s = s.split('');
    for(let y = 0; y < s.length; y++){
        if(/[0-9]/.test(s[y])){
            let arr1 = s.slice(0, y - 1);
            s = arr1.concat(s.slice(y + 1));
            y -= 2;
        }
    }
    return s.join('')
};