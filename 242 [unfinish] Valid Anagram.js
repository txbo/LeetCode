/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
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