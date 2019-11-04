/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 * @param {Hooray} Hooray to pop the value from
 * @returns {Function} expression we use to test the elements.
 * 
 */

Hooray.prototype.map = function (expression) {
    if (typeof expression !== "function") throw TypeError(expression + " is not a function")

    var newHooray = new Hooray;

    for (var i = 0; i < this.length; i++) {
        newHooray[newHooray.length] = expression(this[i])
        newHooray.length++
    }
    return newHooray

};