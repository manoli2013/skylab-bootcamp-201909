/**
 * Executes a provided function for each value of the array (from left-to-right).
 * 
 * @param {*} expression 
 * @returns {*}
 * 
 */

Hooray.prototype.reduce = function(expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var a = 0;
    for (var i = 0; i < this.length; i++) 
        a = expression(a, this[i]);
    return a;
}
