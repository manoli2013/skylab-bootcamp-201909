/**
 *  FIND Returns the first element in the array that accomplish the provided condition (function).
 * 	Otherwise, it returns undefined, indicating that no element passed the test.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {*} the item that accomplishes the condition provided in the function
 */


//REFACTORIZACIÓN
function find(array, expression) { 
	
	if(!(array instanceof Array)) throw new TypeError(array + ' is not an array');
	if(!(expression instanceof Function)) throw new TypeError(expression + ' is not a function');

	for(i = 0; i < array.length; i++) {
		
		if(expression(array[i])) {
			return array[i];
		}
	}
	return undefined;
}


// function find(array,funcion) { 
// 	var newArray = []
	
// 	for(i = 0; i < array.length; i++) {
		
// 		if(funcion(array[i])) {
// 			newArray[newArray.length] = array[i];
// 		}
// 	}
// 	if(newArray.length === 0) {
// 		return -1;
// 	}
// 	else {
// 		return newArray[0];
// 	}
// }