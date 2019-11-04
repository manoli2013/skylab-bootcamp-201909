/**
 * Adds one or more elements to the first positions of the array and returns the new array length
 * @param  {Array} array The array to add items to.
 * @param {...any} item The item (or items) to add.
 * @return {Number}       The new array length
 */
Hooray.prototype.unshift = function() {
  let newArray = [];

  for (var i = 0; i < arguments.length; i++)
    newArray[i] = arguments[i];

  for (var i = 0; i < this.length; i++)
    newArray[newArray.length++] = this[i];

  for (var i = 0; i < newArray.length; i++) {
    this[i] = newArray[i];
    this.length = i + 1;
  }
  return this.length;
};
