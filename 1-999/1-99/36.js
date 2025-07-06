/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let boardMap = new Map;
    let colMap = new Map;
    for (let y = 0; y < board.length; y++) {
        let rowSet = new Set;
        for (let x = 0; x < board[y].length; x++) {
            let c = board[y][x];
            let n = Math.floor(y / 3) * 3 + Math.floor(x / 3);
            if (c !== '.') {
                if (rowSet.has(c)) return false;
                if((boardMap.get(n) || "").split('').includes(c) || (colMap.get(x) || "").split('').includes(c)) return false;
            }
            boardMap.set(n, (boardMap.get(n) || '') + c);
            colMap.set(x, (colMap.get(x) || '') + c);
            rowSet.add(c);
        }
    }
    return true;
};