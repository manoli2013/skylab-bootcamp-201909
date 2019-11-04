/**
 * 
 * @param {*} expression 
 * 
 * @throws {TypeError} arr is not an array
 * @throws {TypeError} expression is not a function
 * 
 * @returns {Array}
 */


Hooray.prototype.reduce = function(expression) {


    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var aux = 0;
    for (var i = 0; i < this.length; i++) 
        aux = expression(aux, this[i]);
    return aux;
}
