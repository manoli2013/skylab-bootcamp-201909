/**
 * Pushes a variable number of items into an arr.
 * 
 * @param {Array} arr The arr to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the arr.
 */
function push(arr){ 

	if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an array');

	for (var i = 1; i < arguments.length; i++)
		arr[arr.length] = arguments[i]


	return arr.length
}
