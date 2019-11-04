/**
 * MAP Iterates on every item of an array and manipuates it according to a function.
 * It returns the new array with items modified.
 * 
 * @param {Array} array The array to get items.
 * @param {Function} function that specifies what to do with the array items (add 2)
 * 
 * @returns {Array} The new array.
 * @throws {TypeError} If Array is not an awway.
 * @throws {TypeError} If Function is not a function.
 */

function map(array, funcion) { 
    if(!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if(!(funcion instanceof Function)) throw TypeError(funcion + ' is not a function');
    
    var result = [];
    for (i = 0; i < array.length; i++) {
        result[i] = funcion(array[i]);
    }
    return result;
}
