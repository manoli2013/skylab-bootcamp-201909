/**
 * Returns the value of the first element in the provided array that satisfies the expresion.
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * @return{*} returns the value ​​that meet the expression
 * 
 */

function find(array, expression) { 	

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var result;
    var a = false;
	for (var i = 0; i < array.length&&a===false; i++) {    
        a = expression(array[i])   
        if (a) {
            result=array[i]
        }           
    }
    return result;
};