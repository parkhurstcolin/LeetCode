/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let max = 0;
    let count = 0;
    for (let y = 0; y < s.length; y++) {
        if (s.charAt(y) === 'E') {
            count++;
            if (max < count) max = count;
        }
        else count--;
    }
    return max;
};