/**
 * Sorts an array randomly
 * @param  {Array} array Array to sort randomly
 * @return {Array}       A copy of the array sorted randomly
 */
Hooray.prototype.shuffle = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) result[i] = this[i];
  for (var i = 0; i < result.length; i++) {
    var random = Math.floor(Math.random() * result.length); // 0 <> length-1

    var value = result[i];
    result[i] = result[random];
    result[random] = value;
  }
  return result;
};
