/*
 * Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * @param  {Array} array      Array to be reduced
 * @param  {Function} expression Function to reduce with
 * const reducer = (accumulator, currentValue) => accumulator + currentValue;
 * @return {[type]}            returned value is assigned to the accumulator of expression
 */
Hooray.prototype.reduce = function(reducer) {
  if (typeof reducer !== 'function') throw TypeError(reducer + ' is not a function');
  if (this.length === 0) throw TypeError('Reduce of empty array with no initial value');

  var result = this[0]
  for (i = 1; i < this.length; i++) {
    result = reducer(result, this[i]);
  };
  return result;
};
