/**
 * Return to result of evaluate the items of the array, return true if it found a ocurrence in
 * @param {Array} array The array to search for
 * @param {function} expression The expression to evaluate the elements
 * 
 * @returns {boolean} The result of the evaluation
 */
function some(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (var i = 0; i < array.length; i++) {
        if (expression(array[i])) {
            return true;
        }
    }
    return false;
}