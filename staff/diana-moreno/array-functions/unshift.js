/**
 * Adds one or more elements to the first positions of the array and returns the new array length
 * @param  {[Array]} array The array to add items to.
 * @param {...any} item The item (or items) to add.
 * @return {[Number]}       The new array length
 * @throws {TypeError}    If array is not an array
 */
function unshift(array) {
  let newArray = [];

  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

  for (var i = 1; i < arguments.length; i++)
    newArray[i - 1] = arguments[i];

  for (var i = 0; i < array.length; i++)
    newArray[newArray.length] = array[i];

  for (var i = 0; i < newArray.length; i++)
    array[i] = newArray[i];

  return array.length;
};
