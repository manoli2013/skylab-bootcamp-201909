 /**
 * Copies a part of the array within a new array starting from beginning
 *  to end (end not included). The original array will not be modified.
 * 
 * @param {Array} array The array to push elements to.
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {Array} returns the new array created with the condition implemented 
 * 
 *  
 */

function slice(array, fidx, lidx){
    if(array.length === 0)throw ReferenceError('array is empty');
    if(!(array instanceof Array))throw new TypeError(array + ' is not an array');
    
    var result = [];

    for(var i = fidx; i < lidx; i++){

        result[result.length++] = array[i];

    }

    return result;
}
