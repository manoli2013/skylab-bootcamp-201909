/**
 * MAP.
 * Iterates through all the items of a Hooray and change them according to an expression.
 * Returns a new hooray with the items modified.
 * 
 * @param {Hooray} hooray where it takes the initial items. 
 * @param {Function} function that apply changes. 
 * 
 * @returns {Hooray} A new hooray with the modifications done. 

 * @throws {TypeError} If Function is not a function.
 */

Hooray.prototype.map = function(expression) { 
  
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var result = new Hooray();
    for (i = 0; i < this.length; i++) {
		result[i] = expression(this[i]);
		result.length++;
    }
    return result;
}