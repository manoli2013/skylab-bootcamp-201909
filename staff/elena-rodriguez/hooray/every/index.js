 /**
 * EVERY.
 * Checks if all the elements in the hooray accomplish the condition given. 
 * 
 * @param {Hooray} hooray initial. 
 * 
 * @param {Function} expression The condition to evaluate the array
 * 
 * @returns {boolean} returns true if all the elements accomplish; if not, returns false;
 * 
 */

Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < this.length; i++) {
        if (!expression(this[i])) return false;
    }
    return true;
};

