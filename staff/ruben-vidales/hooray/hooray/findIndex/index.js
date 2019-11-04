/**
 * Evaluates the elements of the hooray and returns the postion of the first ocurrence
 * 
 * @param {function} expression The expression that evaluates the elements of the hooray
 * 
 * @returns The position of the first ocurrence, -1 if no element comply the condition
 * 
 */
Hooray.prototype.findIndex = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return i;
        }
    }
    return -1;
}