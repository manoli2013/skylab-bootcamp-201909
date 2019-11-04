/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @param  {Array} array Array to search in
 * @param  {String, Number} item  Item to be searched in the array
 * @return {Number}       First index where the item has been found.
 * @throws {TypeError}    If array is not an array
 */
function indexOf(array, item) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');

  for (let i = 0; i < array.length; i++)
    if (array[i] === item) return i;

  return -1;
};

//versión segundo índice?