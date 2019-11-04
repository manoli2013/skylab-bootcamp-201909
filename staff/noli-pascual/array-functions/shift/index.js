/**
 * SHIFT Eliminates the first item of an array and returns it. Modifies the length of original array.
 * 
 * @param {Array} array The array to shift.
 * 
 * @returns {Item} Item eliminated.
 */

function shift(array) { 
	
	if(!(array instanceof Array)) throw TypeError(array + ' is not an array');

	var itemShift = array[0];
	
	for(i = 0; i < array.length; i++) {
		if(i > 0) {
			array[i - 1] = array[i];
		}
	}
	array.length = array.length -1;
	return itemShift;
}
