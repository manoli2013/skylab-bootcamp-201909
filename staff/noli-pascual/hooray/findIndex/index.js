/**
 * 
 * returns the index of the first element in the array that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {*} expresion 
 * @returns {Number} index of the first element in the array that satisfies the provided 
 * testing
 */
Hooray.prototype.findIndex = function(expression) {

    if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var result = -1;

    for (var a = 0; a < this.length; a++) {
        if (expression(this[a])) return a;
    }

    return result;
};