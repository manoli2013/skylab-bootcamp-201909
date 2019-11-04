/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param  {Array}   array Array to change
 * @param  {Function} expression    Function that produces an element of the new Array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.map = function(expression) {
  if (this.length === 0) return this;
  if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

  var newArray = [];

  for (var i = 0; i < this.length; i++)
    newArray[i] = expression(this[i]);

  return newArray;
};
