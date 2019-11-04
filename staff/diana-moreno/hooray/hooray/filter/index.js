/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * @param  {Array}   array Array to change
 * @param  {Function} expression    Function to pass to the array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.filter = function(expression) {
  if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

  var newArray = [];
  var counter = 0;

  for (var i = 0; i < this.length; i++) {
    if (expression(this[i])) newArray[counter++] = this[i]
    //counter++
  }
  return newArray;
};
