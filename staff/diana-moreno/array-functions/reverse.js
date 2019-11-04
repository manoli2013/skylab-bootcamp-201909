/**
 * Reverses the order of the elements in an array and returns the new array
 * @param  {[Array]} array The array to reverse
 * @return {[Array]}       The array reversed
 * @throws {TypeError}    If array is not an array
 */
function reverse(array) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

  let newArray = [];
  counter = 0;

  for (var i = array.length - 1; i >= 0; i--)
    newArray[counter++] = array[i];
  // counter++;

  for (var i = 0; i < array.length; i++)
    array[i] = newArray[i];

  return array;
};
