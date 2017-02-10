/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  } else {
    for (var i = 0; i < s.length; i++) {
      for (var j = 0; j < s.length; j++) {
        if (s[i] == t[j]) {
          if (j == 0) {
            t = t.slice(1, t.length)
            break
          } else if (j == t.length - 1) {
            t = t.slice(0, t.length - 1)
            break
          } else {
            t = t.slice(0, j).concat(t.slice(j + 1, t.length))
            break
          }
        }
      }
    }
    if (t.length == 0) {
      return true
    } else {
      return false
    }
  }
};

// AC
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var tmp1 = { size: 0 }
  var tmp2 = { size: 0 }
  for (var i = 0; i < s.length; i++) {
    if (s[i] in tmp1) {
      tmp1[s[i]]++
    } else {
      tmp1[s[i]] = 1
      tmp1.size++
    }
  }
  for (i = 0; i < t.length; i++) {
    if (t[i] in tmp2) {
      tmp2[t[i]]++
    } else {
      tmp2[t[i]] = 1
      tmp2.size++
    }
  }
  return same(tmp1, tmp2)

  function same(o1, o2) {
    if (o1.size !== o2.size) {
      return false
    }
    for (var key in o1) {
      if (o1[key] !== o2[key]) {
        return false
      }
    }
    return true
  }
};
