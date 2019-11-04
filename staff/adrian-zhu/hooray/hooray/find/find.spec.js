/**
 * 
 * @param {*} expression function
 * 
 * @throws {TypeError} arr is not an Array;
 * @throws {TypeError} expression is not a function;
 * 
 * @returns {Value} the first item which complete the expression
 */

Hooray.prototype.find = function(expression) { 

    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    for(i = 0; i < this.length; i++) {
        if(expression(this[i])) {
           return this[i]
        }  
    }
    return undefined
}
