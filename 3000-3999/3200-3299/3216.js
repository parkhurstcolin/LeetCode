/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    let x = 0;
    let store = ''
    while (x < s.length) {
        if (s.charAt(x) % 2 === s.charAt(x + 1) % 2 && s.charAt(x+1) < s.charAt(x) ) break;
        store += s.charAt(x)
        x++;
    }
    return x === s.length ? store : store + s.charAt(x+1) + s.charAt(x) + s.slice(x+2)
};