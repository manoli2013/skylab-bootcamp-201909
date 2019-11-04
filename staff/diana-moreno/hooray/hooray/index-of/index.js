/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @param  {Array} array Array to search in
 * @param  {String, Number} item  Item to be searched in the array
 * @return {Number}       First index where the item has been found
 * @throws {TypeError}    If item is not a number or a string
 */
Hooray.prototype.indexOf = function(item) {
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');

  for (var i = 0; i < this.length; i++)
    if (this[i] === item) return i;

  return -1;
};
