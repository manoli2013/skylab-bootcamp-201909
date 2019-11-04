/**
POP
 * Deletes the last element in the array
 * 
 * @param {Array} array the array to delete the element
 * 
 * @returns {item} the array without the last element of this
 */
function pop(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    if (array.length === 0) { return undefined };
    var aux = array[array.length -1];
    array.length = array.length - 1;
    return aux;
}


