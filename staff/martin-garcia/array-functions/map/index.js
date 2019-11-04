/**
 * Return an array with the "expression" of all the values in the original array:
 * 
 * @param {*[]} array 
 * @param {Function} expression The expression to evaluate in each item of the array. 
 * @returns {*[]} new array
 */
function map(array, expression) {
    var list = [];
    for (var i = 0; i < array.length; i++)
        list[i] = expression(array[i]);
    return list;

}