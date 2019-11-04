/**
 * 
 * @param {Function} expression: variation that you want to operate;
 * 
 * @throws {TypeError}: when arr is not array;
 * @throws {TypeError}: when expression is not a function;
 * 
 * @returns {Boolean} aux => boolean 
 */

Hooray.prototype.every =  function(expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux;
    for (var i = 0; i < this.length; i++){
        if (expression(this[i]) != true){
            aux = false
        } else {
            aux = true
        }
    }
    
    return aux;
}