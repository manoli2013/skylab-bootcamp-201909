/**
 * Is used to merge two or more arrays without modifying the original array.
 * @param  {Array}  One or more rrays to merge
 * @return {Array} New merged array
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.concat = function() {
  var newArray = [];

  for (var i = 0; i < this.length; i++) // var newArray = [...this];
    newArray[newArray.length++] = this[i];

  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Array)) {
      newArray[newArray.length++] = arguments[i];
    } else {
      for (var j = 0; j < arguments[i].length; j++) {
        newArray[newArray.length++] = arguments[i][j];
      }
    }
  }
  return newArray;
};
