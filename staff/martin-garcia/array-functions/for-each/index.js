/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 */
function forEach(array, expression) {
    if (!(expression instanceof Function)) throw TypeError('Error: missing argument 0 when calling function forEach');
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');


    for (var i = 0; i < array.length; i++)
        expression(array[i]);
}