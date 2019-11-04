/**
 * Eliminates the last item of an array given.
 * 
 * @param {Array} array The array to pop elements to.
 * 
 * @returns {Item} Item that was eliminated.
 */

function pop(array) { 
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

	var itemErased = array[array.length -1];
	if(array.length > 0) {
		array.length = array.length -1;
		return itemErased;
	} 
	return undefined;

}
