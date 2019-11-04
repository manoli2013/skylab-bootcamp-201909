/**
 * Returns the first item that accomplish the expression provided.
 * 
 * @param {Function} expression The expression that evaluates the items to be returned.
 * 
 * @returns {*} The first item that accomplish the expression provided.
 *              If there're no items that accomplish, returns undefined.
 * 
 * @throws {TypeError} If the expression is not a function.
 */
Hooray.prototype.find = function (expression) {
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   
   for (i=0; i<this.length; i++) {
       if (expression(this[i])) return this [i];
   }
   return undefined;
}