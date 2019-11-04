/**
 * 
 * returns the value of the first element in the provided 
 * array that satisfies the provided testing function.
 * 
 * @param {function} expression function to test each element
 * @returns {*} The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined 
 * @throws {TypeError} Error: missing argument when calling function Array.prototype.find
 */
Hooray.prototype.find = function(expression) {
    if (expression === undefined) throw TypeError(expression + " is not a function");

    for (var a = 0; a < this.length; a++) {
        if (expression(this[a])) {
            return this[a];
        }
    }

    return undefined;
}