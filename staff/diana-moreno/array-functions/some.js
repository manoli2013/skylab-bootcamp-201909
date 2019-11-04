/**
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * @param  {Array}   array   Array to pass the function
 * @param  {Function} fn     Function to be passed by the array
 * @return {Boolean}         Boolean value
 * @throws {TypeError} If array is not an array, or function is not a function
 */
function some(array, fn) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for (let i in array) {
    if (fn(array[i])) return true;
  }
  return false;
};
