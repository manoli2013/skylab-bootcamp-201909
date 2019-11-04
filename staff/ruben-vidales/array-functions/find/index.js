/**
 * Find the value of the fist occurrence of the expression inside the array, return undefined if no coincidence
 * @param {Array} array The array to search for
 * @param {Function} expression The expression to check every value
 * 
 * @returns {*} The value if the expression find a coincidence, undefined if not
 */
function find (array, expression){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for(var i = 0; i < array.length; i++){
        if(expression(array[i])){
            return array[i];
        }
    }
    return undefined;
}