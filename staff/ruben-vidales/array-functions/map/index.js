/**
 * Apply an expression to each element of the array
 * 
 * @param {Array} array the array to apply the expression
 * @param {Function} expression the expression that applys over each element
 *
 * @returns {Array} a new array with the expression applied
 */
function map(array, expression) {
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
	if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray[i] = expression(array[i]);
    }
    return newArray;
}