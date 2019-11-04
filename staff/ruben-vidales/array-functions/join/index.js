/**
 * Create a string that concatenates the elements of the array with the separator
 * 
 * @param {Array} array The elements to separate
 * @param {string} separator The separator used to concatenate the elements
 * 
 * @returns {string} The resultant string
 */
function join(array, separator) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    if (separator === undefined) {
        sep = ',';
    }
    else {
        sep = separator;
    }
    var aux = '';
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (i === array.length - 1){
                aux += array[i];
            }
            else{
                aux += array[i] + sep;
            }
        }
        return aux;
    }
    else {
        return aux;
    }
}
