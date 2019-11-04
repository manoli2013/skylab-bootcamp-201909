/**
 * 
 * @param {*} array Array to evaluate
 * @param {*} expression expression to evaluate
 * @returns {*} return the result of the expression
 */
function reduce(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');
    if (array.length === 0) throw TypeError('reduce of empty array with no initial value');

    var expressionResult = 0;

    for (var a = 0; a < array.length; a++) {
        debugger
        console.log(expressionResult = expression(expressionResult, array[a]));
    }

    return expressionResult;
}