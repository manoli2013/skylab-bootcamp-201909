
/**
 * Evaluate if all items accomplish the expression sent.
 * 
 * @param {Function} expression The expression to evaluate on every item in the Hooray.
 * 
 * @returns {Boolean} True when ALL itmes acomplish expression || False when not.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.every = function  (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (!(expression(this[i]))) return false;
    }
    return true;
}


