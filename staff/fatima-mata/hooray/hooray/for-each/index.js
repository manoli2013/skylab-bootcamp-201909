/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {*} expression The expression to evaluate in each item of the hooray.
 * @throws {*} If expression is not a function.
 * 
 */

Hooray.prototype.forEach = function(expression) {
	
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};