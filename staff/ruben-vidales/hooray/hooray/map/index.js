/**
 * Apply the expression over every element of the Hooray
 * 
 * @returns {Hooray} The new Hooray with the new values
 */
Hooray.prototype.map = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux = new Hooray();
    for (var i = 0; i < this.length; i++) {
        aux[i] = expression(this[i]);
        aux.length++;
    }
    return aux;
}