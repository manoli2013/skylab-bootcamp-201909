/**
 * 
 * The every() method checks if all elements in an array pass a test (provided as a function)
 * 
 * @param {*[]} array Array to check
 * @param {Function name(number){}} expression to check
 * @returns It returns a Boolean value
 */
function every(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');

    for (var a = 0; a < array.length; a++) {
        if (!expression(array[a]))
            return false;
    }
    return true;
}