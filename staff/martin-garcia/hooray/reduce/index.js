/**
 * 
 * @param {*} expression expression to evaluate
 * @returns {*} return the result of the expression
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