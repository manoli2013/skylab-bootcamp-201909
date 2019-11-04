/**
 * Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * @param  {Array} array      Array to be reduced
 * @param  {Function} acumulator Function to reduce with
 * const reducer = (accumulator, currentValue) => accumulator + currentValue;
 * @return {[type]}            returned value is assigned to the accumulator of expression
 */
function reduce(array, acumulator) {
  if(array.length === 0) throw TypeError('Reduce of empty array with no initial value');
  if (typeof acumulator !== 'function') throw TypeError(acumulator + ' is not a function');
  if (!(array instanceof Array)) throw TypeError(array + 'is not an array');

  var result = array[0];
  for (i = 1; i < array.length; i++) {
    result = acumulator(result, array[i]);
  }
  return result;
};
