/**
 * Sorts the elements of an array in place and returns the sorted array
 * @param  {Array}   array Array to sort
 * @param  {Function} expression    Function that decides if the sort is increasing or decreasing
 * @return {Array}         Array sorted
 * @throws {TypeError}    If expression is not a expression
 */
Hooray.prototype.sort = function(expression) {
  if (!expression) expression = function() { return 1; };
  if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

  var decreasing = function() {
    if (this[j] < this[j + 1]) {
      var aux = this[j + 1];
      this[j + 1] = this[j];
      this[j] = aux;
    }
  };

  var increasing = function() {
    if (this[j] > this[j + 1]) {
      var aux = this[j + 1];
      this[j + 1] = this[j];
      this[j] = aux;
    }
  };

  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length - 1 - i; j++) { // con -i es más eficiente
      if (expression(2, 1) === 1 - 2) {
        decreasing.bind(this)();
      } else {
        increasing.bind(this)();
      }
    }
  };
  return this;
};
