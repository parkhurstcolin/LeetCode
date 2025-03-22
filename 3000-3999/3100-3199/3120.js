/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let set0 = new Set();
    let count = 0;
    word = word.split('');
    for (let y = 0; y < word.length; y++) {
        let c = word[y].toLowerCase()
        if (!set0.has(c)) {
            if (word.includes(c) && word.includes(c.toUpperCase())) {
                count++;
                set0.add(c);

            }
        }
    }
    return count;
};