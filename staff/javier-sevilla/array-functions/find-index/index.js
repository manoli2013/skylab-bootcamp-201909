/**
 * returns the index of the first element in the array that satisfies the expression
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{index} returns the index of array ​​that meet the expression
 */
function findIndex(array, expression) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var result;
    var boleana = false;
	for (var i = 0; i < array.length&&boleana===false; i++) {    
        boleana = expression(array[i])   
        if (boleana) {
            result=i;
        }           
    }
    return result;
};