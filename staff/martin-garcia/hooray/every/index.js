/**
 * 
 * The every() method checks if all elements in an array pass a test (provided as a function)
 * 
 * @param {Function name(number){}} expression to check
 * @returns It returns a Boolean value
 */
Hooray.prototype.every = function(expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a Function');

    for (var a = 0; a < this.length; a++) {
        if (!expression(this[a]))
            return false;
    }
    return true;
}