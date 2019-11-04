/**
 * Check if every element of the array comply the conditions of the expression
 * @param {*} array The array that contain the elements to be checked
 * @param {*} expression The function to check every element of the array
 * 
 * @returns {boolean} Only return if every element comply the expression, else returns false
 */
function every (array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for(let i = 0; i< array.length ;i++){
        if( !expression(array[i]) ){
            return false;
        }
    }
    return true;
}