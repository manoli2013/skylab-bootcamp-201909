/**
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * @param  {Array}   array   Array to pass the function
 * @param  {Function} expression     Function to be passed by the array
 * @return {Boolean}         Boolean value
 * @throws {TypeError} If expression is not a function
 */
Hooray.prototype.some = function(expression) {
  if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

  for (var i = 0; i < this.length; i++)
    if (expression(this[i])) return true;

  return false;
};
