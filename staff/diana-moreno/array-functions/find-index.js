/**
 * Returns the index of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First index that matches the condition
 * @throws {TypeError}    If array is not an array or function is not a function
 */
function findIndex(array, fn) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for (let i = 0; i < array.length; i++)
    if (fn(array[i])) return i;

  return -1;
};
