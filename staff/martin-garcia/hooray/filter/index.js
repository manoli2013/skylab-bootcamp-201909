/**
 * 
 * Creates a new array with all elements that pass the test implemented by the provided function
 * 
 * @param {*} expression Function to evaluate
 * @returns {*[]} 
 */
Hooray.prototype.filter = function(expression) {
    if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var auxArray = [];
    for (var a = 0; a < this.length; a++) {
        if (expression(this[a]))
            auxArray[auxArray.length] = this[a];
    }
    return auxArray;
};