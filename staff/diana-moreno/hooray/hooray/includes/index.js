/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param  {Array} array Array to search on
 * @param  {String, Number} item  Item to find in the array
 * @return {Boolean}       A boolean if found or not
 */
Hooray.prototype.includes = function(item) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === item) return true;
  }
  return false;
};
