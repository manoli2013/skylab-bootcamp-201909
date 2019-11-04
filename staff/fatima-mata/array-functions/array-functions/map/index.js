/**
 *  Creates a new array with the results of the indicated function call applied to each of its elements.
 * 
 * @param {*} array The array to create the new array
 * @param {*} expression The expression to evaluate in each item of the array.
 * @returns {*} array the new array created
 * @throws {*} If expression is not a function.
 * 
 */

function map(array, expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var a = [];
    for (var i = 0; i < array.length; i++)
    a[a.length] = expression(array[i]);

    return a;
};

