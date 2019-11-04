/**
 * 
 *  Is used to merge two or more arrays. This method does not change the existing 
 * arrays, but instead returns a new array.
 * 
 * @param {*[]} array Array to concat elements 
 * @param {*} element element or arrays to concat into array 
 */
function concat(array, element) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');

    var auxArray = [];
    for (var a = 0; a < array.length; a++) {
        auxArray[a] = array[a];
    }

    if (element instanceof Array) {
        var index = 0;
        for (var b = array.length; b < array.length + element.length; b++) {
            auxArray[b] = element[index];
            index++;
        }
    } else {
        auxArray[array.length] = element;
    }
    return auxArray;
}