/**
 * Returns the first index at element can be found in the array. Otherwise,  it returns -1.
 * @param {*} element The element to locate in the array.
 * @param {*} index Optional. The index to start to search
 */

function indexOf(array, element) {

  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (!(typeof element === 'number' || typeof element === 'string')) throw TypeError(typeof element + ' is not a string or a number');

    for (var i = 0; i < array.length; i++) {

      if (element === array[i]) {
        
        return i;
        }
    }
    return -1;
  }