/**
 * Check if all hooray elements pass the test implemented by the expression
 * 
 * @param {*} hooray the hooray to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * return {*} return true or false
 */

Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < this.length; i++) {
        if (!expression(this[i])) return false;
    }
    return true;
};