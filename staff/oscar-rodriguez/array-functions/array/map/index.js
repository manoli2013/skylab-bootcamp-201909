/**
 * Aplies an expresion to each item of an array and saves the result on a new array.
 * 
 * @param {Array} array The array we will iterate.
 * @param {Function} expression The expression that will be applied to each array item.
 * 
 * @returns {Array} a new array with the results of apply the expression into Array
 */
function map (array, expression) {

    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');    
    
    var newArray = [];
    for (var i=0; i<array.length; i++) {
        newArray[newArray.length]=expression(array[i]);
    }

    return newArray;
}