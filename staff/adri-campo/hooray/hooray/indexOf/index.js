/**
 * Look for an element & returns the first index (if not found > return -1)
 * 
 * @param {array} The array to be searched with element
 * @param {Function} expression The expression to evaluate in each item of the array.
 * @param {item} item what you want to check inside the array 
 */

Hooray.prototype.indexOf = function(value, startIndex){
    // if (!(this instanceof Hooray)) throw TypeError(this + " is not an array");
    if (!(this instanceof Hooray)) throw TypeError(null + " is not an array");
    if (arguments.length > 3) throw Error('too many arguments');
    !startIndex ? startIndex = 0 : parseInt(startIndex);
 
    for (var i = startIndex; i < this.length; i++) {
     if (this[i] === value) return i;
   }
   return -1;
 };