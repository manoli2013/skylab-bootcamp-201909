/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param  {Array}   array Array to change
 * @param  {Function} fn    Function that produces an element of the new Array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
function map(array, fn) {
  if (array.length === 0) return array;
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  let newArray = [];

  for (let i in array)
    newArray[i] = fn(array[i]);

  return newArray;
};
