/**
 * Removes the first element of the array and returns the element
 * @param  {Array} array Array to remove the element from
 * @return {...any}       The first element of the array
 */
Hooray.prototype.shift = function() {
  if (this.length == 0) return undefined;

  var firstElem = this[0];

  for (var i = 0; i < this.length - 1; i++)
    this[i] = this[i + 1];

  delete this[this.length - 1];
  this.length--;
  return firstElem;
};
