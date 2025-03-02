/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let counter = 1;
    for(let y = 0; y < word.length; y++){
        let n = 0;
        let c = word.charAt(y);
        while(c == word.charAt(y+1)){
            n++;
            y++;
        }
        if(n != 0)counter += n;
    }
    return counter;
};