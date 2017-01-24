/**
 * 版本号比较
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  var temp1 = version1.split('.')
  var temp2 = version2.split('.')
  var len = temp1.length < temp2.length ? temp2.length : temp1.length
  for (var i = 0; i < len; i++) {

    if (+temp1[i] > +temp2[i] || (temp2[i] === undefined && +temp1[i] !== 0)) {
      return 1
    }
    if (+temp1[i] < +temp2[i] || (temp1[i] === undefined && +temp2[i] !== 0)) {
      return -1
    }
  }
  return 0
};