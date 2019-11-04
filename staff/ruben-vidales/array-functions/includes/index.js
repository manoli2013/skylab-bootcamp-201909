/**
 * Check if a value is declared inside the array
 * 
 * @param {*} array The array to search for
 * @param {*} find_value The value to search in the array
 * @param {*} param_start The position to start the checking
 * 
 * @returns {boolean} True if the value is in the array, false if not
 */
function includes(array, find_value, param_start) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var start = param_start ? param_start : 0;

    for (let i = start; i < array.length; i++) {
            if (array[i] === find_value) {
                return true;
            }
    }
    return false;
}
