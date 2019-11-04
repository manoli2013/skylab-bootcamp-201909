/**
 * Returns a new string that contains each element of array, 
 *  separate by ,
 * 
 * @param {*[]} array array to concat 
 * @param {*} caract caract that separates the elements  
 * @returns {string} result 
 */
function join(array, caract) {

    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');
    caract === undefined ? caract = ',' : caract += '';

    result = '';
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            result += array[i];
        else
            result += array[i] + caract;
    }
    return result;
}