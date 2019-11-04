/**
 * Delete the first position element in the array
 * 
 * @param {Array} array The array to operate
 * 
 * @returns {*} The deleted element
 */

function shift (array){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  
    var deleted = array[0];
    for (var i = 1; i < array.length; i++) {
        array[i-1] = array[i]; 
    }
    if(array.length > 0) array.length = array.length - 1;
    return deleted;
}