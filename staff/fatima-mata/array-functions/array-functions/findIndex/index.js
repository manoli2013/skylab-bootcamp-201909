/**
 * Check if any element of the array comply the condition and return the position in the array.
 * 
 * @param {*} array The array to evaluate
 * @param {*} expression The expression that checks the values
 * @returns the position of the coincidence, -1 if not
 * 
 */

function findIndex (array, expression){
    
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for(var i = 0 ; i < array.length; i++){
        if(expression(array[i])){
            return i;
        }
    }
    return -1;
}