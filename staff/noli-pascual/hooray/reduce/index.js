/**
 * Executes a reducing function on each element of an hooray
 * 
 * @param {Hooray} hooray The hooray to evaluate elements to the condition given 
 * 
 * @param {*} expression function to reduce the hooray
 * 
 * @returns {number} returns the unic value for the hooray
 */
 
Hooray.prototype.reduce = function(expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');
    if (this.length === 0) throw TypeError('reduce of empty array with no initial value');

    var expressionResult = 0;

    for (var a = 0; a < this.length; a++) {
        expressionResult = expression(expressionResult, this[a]);
    }

    return expressionResult;
}