/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function ( nums ) {
	var result = 0
	var temp
	for ( var i = 0; i < nums.length - 1; i++ ) {
		for ( var j = i + 1; j < nums.length; j++ ) {
			temp = ( nums[ i ] ^ nums[ j ] ).toString( 2 ).match( /1/g )
			result += temp ? temp.length : 0
		}
	}
	return result
};
