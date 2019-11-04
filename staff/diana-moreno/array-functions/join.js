/**
 Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 * @param  {Array} array Array to convert to string.
 * @return {string}      String with all the elements of the array concatenated and separated by commas.
 * @throws {TypeError}    If array is not an array
 */
function join(array, separator) {
  let string = '';
  if (!separator) separator = ',';
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if ((separator instanceof Function)) throw TypeError('separator cannot be a function');

  for (let i in arguments[0]) {
    if (string.length === 0) string += arguments[0][0];
    else string += (separator + '') + arguments[0][i];
  }
  return string;
};
