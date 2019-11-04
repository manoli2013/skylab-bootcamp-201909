/**
 * 
 * removes the last element from an array and returns that element
 * 
 * @param {*} array The array to delete elements to.
 * 
 * @returns {deletedElement} value of last array.
 */

function pop(array) { 
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var deletedElement = array[array.length - 1]
    array.length = array.length - 1;
    
    return deletedElement;
};