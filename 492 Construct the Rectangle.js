/**
 * 给定面积，求出尽可能正方的长宽，宽小于长
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var w = ~~Math.sqrt(area)
  l = 0
  for (; w > 0; w--) {
    l = area / w
    if (l === ~~l) {
      return [l, w]
    }
  }
};
