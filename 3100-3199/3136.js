/**
 * @param {string} word
 * @return {boolean}
 */
const regexp = /[@#$]/;
const vowels = /[aeiou]/i
const consonant = /[qwrtypsdfghjklzxcvbnm]/i

var isValid = function(word) {
    
    if(word.length < 3 || regexp.test(word) || !vowels.test(word) || !consonant.test(word)) return false;
    return true;
};