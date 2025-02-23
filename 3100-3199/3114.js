/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
    s = s.split(':');
    let HH = s[0].split('');
    let MM = s[1].split('');
    if(HH[0] === '?' && ['0','1','?'].includes(HH[1])) HH[0] = '1';
    if(HH[0] === '?') HH[0] = '0'
    if(HH[1] === '?' && HH[0] === '1') HH[1] = '1';
    if(HH[1] === '?' && HH[0] === '0') HH[1] = '9';

    if (MM[0] === '?') MM[0] = '5';
    if (MM[1] === '?') MM[1] = '9';
    return HH.join('') + ":" + MM.join('')
};