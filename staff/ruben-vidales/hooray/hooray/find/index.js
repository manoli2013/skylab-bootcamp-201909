/**
 * Evaluates the elements of the hooray and returns the first ocurrence
 * 
 * @param {function} expression The expression that evaluates the elements of the hooray
 * 
 * @returns The position of the first ocurrence, undefined if no element comply the condition
 * 
 */
Hooray.prototype.find = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return this[i];
        }
    }
    return undefined;
}