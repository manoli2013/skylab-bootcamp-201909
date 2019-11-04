/**
 * SOME checks if an element accomplishes a condition provided in a function
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{result} return true or false
 */
function some(array, expression) { 	

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function')
    
    var isElement;
    
	for (var i = 0; i < array.length; i++) {    
        isElement = expression(array[i])
        if (isElement) return true;        
    }
    
    return false;
};