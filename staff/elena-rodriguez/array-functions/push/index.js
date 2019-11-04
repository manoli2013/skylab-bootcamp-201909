/**
 * add a variable number of items at the end of an array.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new length of the array.
 */
function push(array) { 
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
	for (var i = 1; i < arguments.length; i++)
		array[array.length] = arguments[i]

	return array.length
}