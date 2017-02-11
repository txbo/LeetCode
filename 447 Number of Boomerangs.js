/**
 * @param {number[][]} points
 * @return {number}
 */
/**
var numberOfBoomerangs = function(points) {
    var arr = [],
        count = 0
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var inArr = []
            inArr.push(points[i])
            inArr.push(points[j])
            inArr.push(distance(points[i], points[j]))
            arr.push(inArr)
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i][2] === arr[j][2]) {
                if (arr[i][0] === arr[j][0] || arr[i][0] === arr[j][1] || arr[i][1] === arr[j][0] || arr[i][1] === arr[j][1]) {
                    count++
                }
            }
        }
    }
    return count * 2

    function distance(point1, point2) {
        return Math.pow((point1[0] - point2[0]), 2) + Math.pow((point1[1] - point2[1]), 2)
    }
};
*
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var origin = {}
  var len = points.length
  var dis = 0
  var count = 0
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (j !== i) {
        dis = '' + distance(points[i], points[j])
        if (dis in origin) {
          origin[dis]++
        } else {
          origin[dis] = 1
        }
      }
    }
    for (var key in origin) {
      count += (origin[key] * (origin[key] - 1))
    }
    origin = {}
  }
  return count

  function distance(p1, p2) {
    return Math.pow((p1[0] - p2[0]), 2) + Math.pow((p1[1] - p2[1]), 2)
  }
};


//AC
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var origin = new Map()
  var len = points.length
  var dis = 0
  var count = 0
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (j !== i) {
        dis = (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]) + (points[i][1] - points[j][1]) * (points[i][1] - points[j][1])
          //console.log(dis)
          //origin[dis] = origin[dis]===undefined?1:origin[dis]++
        if (dis in origin) {
          origin[dis]++
        } else {
          origin[dis] = 1
        }
      }
    }
    count += Object.values(origin).reduce((a, b) => a + b * (b - 1), 0)
    origin = {}
  }
  return count
};
