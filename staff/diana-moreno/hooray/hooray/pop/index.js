/**
 * Remove the last element of the array and return the element
 * @param  {Array} array The array to delete the last item
 * @return {Number}       The last element of the array
 */
Hooray.prototype.pop = function() {
  if (this.length == 0) return undefined;

  var lastElem = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return lastElem;
};
