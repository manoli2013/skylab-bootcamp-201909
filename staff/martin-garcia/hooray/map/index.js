/**
 * Return an array with the "expression" of all the values in the original array:
 * 
 * @param {Function} expression The expression to evaluate in each item of the array. 
 * @returns {*[]} new array
 */

Hooray.prototype.map = function(expression) {
    var list = [];
    for (var i = 0; i < this.length; i++)
        list[i] = expression(this[i]);
    return list;

}