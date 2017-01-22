/**
 * 数组中有分布着不同大小的块状岛屿 1 构成，和岛屿周围的海洋 0
 * 不考虑岛屿中没有 0 ，计算海岸线长度
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  //debugger
  var count = 0
  var tmp
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      tmp = 0
      if (grid[i][j] === 1) {
        if (i !== 0 && grid[i - 1][j] === 1) {
          tmp++
        }
        if (i !== grid.length - 1 && grid[i + 1][j] === 1) {
          tmp++
        }
        if (grid[i][j - 1] === 1) {
          tmp++
        }
        if (grid[i][j + 1] === 1) {
          tmp++
        }
        count += 4 - tmp
      }
    }
  }
  return count
};