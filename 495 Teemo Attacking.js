/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  var totalTime = 0
  var unPoisoned = 0
  var len = timeSeries.length
  for (var i = 0; i < len; i++) {
    if (timeSeries[i] < unPoisoned) {
      totalTime += timeSeries[i] - timeSeries[i - 1]
    } else {
      totalTime += duration
    }
    unPoisoned = timeSeries[i] + duration
  }
  return totalTime
};
