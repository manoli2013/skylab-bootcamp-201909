/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param  {Array} array Array to search on
 * @param  {String, Number} item  Item to find in the array
 * @return {Boolean}       A boolean if found or not
 * @throws {TypeError} If array is not an array, item is not a string, a number or a boolean
 */
function includes(array, item) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

  for (let i in array) {
    if (array[i] === item) return true;
  }
  return false;
};
