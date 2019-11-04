/**
 * 
 * executes a reducer function (that you provide)
 *  on each element of the array, resulting in a single output value.
 * 
 * @param {*} array The array to reverse sort elements to. 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @return {acumulator} total value of all array elements by applying the expression
 * 
 */
function reduce(array, expression) { 	
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var accumulator = 0; 
    
    for (var i = 0;i < array.length; i++)
        accumulator = expression(accumulator,array[i]);

    return accumulator;
};