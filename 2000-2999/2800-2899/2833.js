/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let setMovesL = 0;
  let setMovesR = 0;
  moves = moves.split("");
  for (let y = 0; y < moves.length; y++) {
    if (moves[y] == "L") {
      setMovesL++;
      setMovesR--;
    } else if (moves[y] == "R") {
      setMovesL--;
      setMovesR++;
    } else {
      setMovesL++;
      setMovesR++;
    }
  }

  return setMovesL > setMovesR ? setMovesL : setMovesR;
};
