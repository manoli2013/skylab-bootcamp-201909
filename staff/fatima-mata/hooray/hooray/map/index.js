/**
 * Iterates on every item of a hooray and manipuates it according to a function.
 * It returns the new hooray with items modified.
 * 
 * @param {*} hooray The to get items.
 * @param {*} function that specifies what to do with the hooray items (add 2)
 * @returns {*} The new hooray.
 * @throws {*} If Function is not a function.
 * 
 */

Hooray.prototype.map = function(expression) { 
  
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var a = new Hooray();
    for (i = 0; i < this.length; i++) {
		a[i] = expression(this[i]);
		a.length++;
    };
    return a;
};
