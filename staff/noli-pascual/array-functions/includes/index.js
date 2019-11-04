//INCLUDES method determines whether an array includes a certain value among its entries,
//returning true or false as appropriate.

/**
 * INCLUDESS Iterates determines whether an array includes a certain value among its entries,
    returning true or false as appropriate.
 * @param {Array} array The array to filter items.
    @param {Number} number to indicate initial index.
 * 
 * @returns {Array} The new array.
 * @throws {TypeError} If Array is not an awway.
 * @throws {TypeError} If Function is not a function.
 */


function includes(arr, value, index) { 
    
    
    if(!index) index = 0;

	for(var i = index; i < arr.length; i++) {
		
		if(arr[i] === value) return true;
    }
    
    return false;
}
