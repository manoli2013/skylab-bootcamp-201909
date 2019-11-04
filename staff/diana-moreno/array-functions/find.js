/**
 * Returns the value of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First number that matches the condition
 * @throws {TypeError}    If array is not an array or function is not a function
 */
function find(array, fn) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for (let i in array)
    if (fn(array[i])) return array[i];

  return undefined;
};
