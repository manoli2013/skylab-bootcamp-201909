/**
 * Reverses the order of the elements in an array and returns the new array
 * @param  {Array} array The array to reverse
 * @return {Array}       The array reversed
 */
Hooray.prototype.reverse = function(array) {
  var newArray = [];
  counter = 0;

  for (var i = this.length - 1; i >= 0; i--)
    newArray[counter++] = this[i];
  // counter++;

  for (var i = 0; i < this.length; i++)
    this[i] = newArray[i];

  return this;
};
