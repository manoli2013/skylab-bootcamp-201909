 /**
 * 
 * @param {*} expression : expression
 * 
 * @throws {TypeError}: arr is not array
 * @throws {TypeError}: expression is not a function
 * 
 * @returns{} 
 */

Hooray.prototype.map = function (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var result = [];
  
    for (var i = 0; i < this.length; i++)
        result[i] = expression(this[i]);
  
    return result;
}