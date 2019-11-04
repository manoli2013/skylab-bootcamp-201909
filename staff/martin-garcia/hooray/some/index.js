/**
 * 
 *  tests whether at least one element in the array passes the test implemented
 *  by the provided function. It returns a Boolean value.
 * 
 * @param {*[]} array Array to prove the expresion
 * @param {Function} expression expression to test
 * @returns {boolean}
 */
Hooray.prototype.some = function(expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');

    for (var a = 0; a < this.length; a++) {
        if (expression(this[a])) return true;
    }

    return false;
}