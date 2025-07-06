/**
 * @param {string[]} strs
  * @return {string}
   */
var longestCommonPrefix = function (strs) {
    strs.sort((a, b) => b.length - a.length);
    const shortest = strs.pop();
    let i = 0;
    for (; i < shortest.length; i++) {
        const prefix = shortest.substring(0, i + 1);
        if (!strs.every(s => s.startsWith(prefix))) break;
    }
    return shortest.substring(0, i);
}; 