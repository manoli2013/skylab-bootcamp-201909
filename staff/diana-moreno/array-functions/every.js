/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * @param  {Array}   array  Array to be verified
 * @param  {Function} fn    Function with the condition to pass
 * @return {Boolean}        A boolean value
 * @throws {TypeError}    If array is not an array or function is not a function
 */
function every(array, fn) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  let counter = 0;
  for (let i in array)
    if (fn(array[i])) counter++;

  return counter === array.length ? true : false;
};
