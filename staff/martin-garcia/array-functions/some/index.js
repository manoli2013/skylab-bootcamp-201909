/**
 * 
 *  tests whether at least one element in the array passes the test implemented
 *  by the provided function. It returns a Boolean value.
 * 
 * @param {*[]} array Array to prove the expresion
 * @param {Function} expression expression to test
 * @returns {boolean}
 */
function some(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');

    for (var a = 0; a < array.length; a++) {
        if (expression(array[a])) return true;
    }

    return false;
}