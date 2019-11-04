/**
 * 
 * 
 * @param {Function} expression: variation that you want to operate;
 * 
 * @throws {TypeError}: when arr is not arr;
 * @throws {TypeError}: when expression is not a function;
 * 
 * @returns {Boolean} aux => boolean 
 */

Hooray.prototype.some = function(expression) { 


    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var isElement = false;
    for (i = 0; i < this.length; i++) {
        if(expression(this[i])) {
        isElement = true;
    }
}
    return isElement
};