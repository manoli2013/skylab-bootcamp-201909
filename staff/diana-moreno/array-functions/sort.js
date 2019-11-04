/**
 * sorts the elements of an array in place and returns the sorted array
 * @param  {Array}   array Array to sort
 * @param  {Function} fn    Function that decides if the sort is increasing or decreasing
 * @return {Array}         Array sorted
 */
function sort(array, fn) {
  if (!fn) fn = function() { return 1 };
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  var decreasing = function() {
    if (array[j] < array[j + 1]) {
      var aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  };

  var increasing = function() {
    if (array[j] > array[j + 1]) {
      var aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  };

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1 - i; j++) { // con -i es más eficiente
      if (fn(2, 1) === 1 - 2) decreasing();
      else increasing();
    }
  };

  return array;
};
