/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let x = 0;
    let y = 0;
    while(commands.length !== 0){
        let c = commands.shift();
        if(c === 'UP') y -= 1;
        if(c === 'DOWN') y += 1;
        if(c === 'LEFT') x -= 1;
        if(c === 'RIGHT') x += 1;
    }

    return (y * n) + x;
};