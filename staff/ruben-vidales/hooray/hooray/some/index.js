/**
 * Check if any of the elements of the hooray comply the condition
 * 
 * @param {function} expression The expression to evaluate the hooray
 * 
 * @returns {boolean} True if a element comply the condition, false if not
 */
Hooray.prototype.some = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return true;
        }
    }
    return false;
}