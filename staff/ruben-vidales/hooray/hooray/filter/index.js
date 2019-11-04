/**
 * Returns an hooray with the positions of the elements that comply the condition
 * 
 * @param {function} expression The expression to evaluate the elements of the hooray
 * 
 * @returns {Hooray} The hooray with the values that comply the expression
 */
Hooray.prototype.filter = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux = new Hooray();
    var cont = 0;
    for (let i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            aux[cont] = this[i];
            aux.length++;
            cont++;
        }
    }
    return aux;
}
