/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const columns = grid[0].length
    let results = 0;
    
    function detectedIsland(y, x) {
        if(grid[y] == undefined || grid[y][x] != '1') return;
        grid[y][x] = '0'
        detectedIsland(y - 1, x);
        detectedIsland(y + 1, x);
        detectedIsland(y, x - 1);
        detectedIsland(y, x + 1);
    }
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(grid[i][j] == '1') {
                results++;
                detectedIsland(i, j);
            }
        }
    }

    return results;
};