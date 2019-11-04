/**
 * Sort array in orden from lower to higher (for numbers and strings)
 * 
 * @param {Array} array Array to be sorted
 * 
 * @returns {Array} The sorted array
 */
function sort(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    var aux;

    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j].toString() > array[j+1].toString()) {
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }         
        }               
    }
    return array;
}