/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * @param  {Array}   array  Array to be verified
 * @param  {Function} expression    Function with the condition to pass
 * @return {Boolean}        A boolean value
 * @throws {TypeError}    If expression is not a function
 */
Hooray.prototype.every = function(expression) {
  if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

  var counter = 0;
  for (var i = 0; i < this.length; i++)
    if (expression(this[i])) counter++;

  return counter === this.length ? true : false;
};
