/**
 * 
 * creates a new array with the results of calling a provided 
 * function on every element in the calling array.
 * 
 * @param {*} array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @returns {newArrray} return new array with values calculated by the expression
 * 
 */

function map(array, expression) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var newArray = []; 
	for (var i = 0; i < array.length; i++) 
        newArray [i] = expression(array[i], i , array);

    return newArray;
};