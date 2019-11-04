/**
 * Check if all array elements pass the test implemented by the expression
 * 
 * @param {*} array the array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * return {*} bolean return true or false
 * 
 */

function every(array, expression) { 

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var a;
	for (var i = 0; i < array.length; i++) {    
        a = expression(array[i])
        if (!(a)) return false;        
    }
    return true;
}