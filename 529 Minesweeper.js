/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
// [                                 // [
//  ['E', 'E', 'E', 'E', 'E'],       //  ['B', '1', 'E', '1', 'B'],
//  ['E', 'E', 'M', 'E', 'E'],  ==>  //  ['B', '1', 'X', '1', 'B'],
//  ['E', 'E', 'E', 'E', 'E'],       //  ['B', '1', '1', '1', 'B'],
//  ['E', 'E', 'E', 'E', 'E']        //  ['B', 'B', 'B', 'B', 'B']
// ]                                 // ]

//                          Click : [1,2]

var updateBoard = function(board, click) {
  var [row, col] = click
  //  board[row][col]
  var aroundRow = [-1, -1, -1, 0, 0, 1, 1, 1]
  var aroundCol = [-1, 0, 1, -1, 1, -1, 0, 1]
  var fillNum = 0
  var tmpPoint

  if (board[row][col] == 'M') {
    board[row][col] = 'X'
    return board
  }

  if (board[row][col] != 'E') {
    return board
  }

  if (board[row][col] == 'E') {
    for (var i = 0; i < 8; i++) {
      tmpPoint = board[row + aroundRow[i]] && board[row + aroundRow[i]][col + aroundCol[i]]
      if (tmpPoint == 'M') {
        fillNum++
      }
    }
  }

  if (fillNum) {
    board[row][col] = '' + fillNum
  } else {
    board[row][col] = 'B'
    for (var i = 0; i < 8; i++) {
      tmpPoint = board[row + aroundRow[i]] && board[row + aroundRow[i]][col + aroundCol[i]]
      if (tmpPoint) {
        updateBoard(board, [row + aroundRow[i], col + aroundCol[i]])
      }
    }
  }
  return board
};
