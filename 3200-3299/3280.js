/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split('-').map(seg => (+seg).toString(2)).join('-')
};