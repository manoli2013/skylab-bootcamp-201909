/**
 * Find the first element that accomplish a condition and returns its index. 
 * 
 * @param {Hooray} hooray we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} the index of the element found. 
 * */

Hooray.prototype.findIndex = function (expression) {
    if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    for (let i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return i;
        }
    }
    return -1;
}
