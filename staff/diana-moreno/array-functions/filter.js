/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * @param  {Array}   array Array to change
 * @param  {Function} fn    Function to pass to the array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
function filter(array, fn) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (array.length === 0) return array;
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  let newArray = [];
  let counter = 0;

  for (let i in array)
    if (fn(array[i])) newArray[counter++] = array[i]
  //counter++

  return newArray;
};
