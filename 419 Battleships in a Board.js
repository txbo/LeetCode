/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  return board.reduce((memo,curr,m)=>[].reduce.call(curr, (i,j,n)=>(j === 'X' && (m === 0 || board[m - 1][n] !== 'X') && (n === 0 || curr[n - 1] !== 'X')) ? ++i : i, memo), 0)
};
