/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
])
var checkTwoChessboards = function(coordinate1, coordinate2) {
    coordinate1 = coordinate1.split('');
    coordinate2 = coordinate2.split('');
    let n1 = Number(coordinate1[1]) + map.get(coordinate1[0]);
    let n2 = Number(coordinate2[1]) + map.get(coordinate2[0]);
    return n1 % 2 === n2 % 2 ? true : false;


    
};