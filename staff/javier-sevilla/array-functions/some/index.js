/**
 * check if one array elements pass the test implemented by the expression
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{result} return true or false
 */
function some(array, expression) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var boleana;;
	for (var i = 0; i < array.length; i++) {    
        boleana = expression(array[i])
        if (boleana) return true;        
    }
    return false;
};