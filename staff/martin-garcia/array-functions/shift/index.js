/**
 * Modifies the original array, removing the first element
 * and relocates the following items
 * 
 * @param {*[]} array 
 * @returns {*} returns the deleted element or undefined if array.length === 0
 */
function shift(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');

    var aux;
    if (array.length > 0) {
        aux = array[0];


        for (var a = 1; a < array.length; a++) {
            array[a - 1] = array[a];
        }
        array.length--;
        return aux;
    }
    return aux;
}