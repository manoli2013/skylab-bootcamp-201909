/**
 Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 * @param  {Array} array Array to convert to string.
 * @return {string}      String with all the elements of the array concatenated and separated by commas.
 */
Hooray.prototype.join = function(separator) {
  var string = '';
  if (!separator) separator = ',';
  if ((separator instanceof Function)) throw TypeError('separator cannot be a function');

  for (var i = 0; i < this.length; i++) {
    if (string.length === 0) string += this[0];
    else string += (separator + '') + this[i];
  }
  return string;
};
