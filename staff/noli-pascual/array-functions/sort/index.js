/**SORT method sorts the elements of an array in place and returns the sorted array.
 * 
 * @param {*} array 
 * @returns {Array} sorted array
 * 
 */
function sort(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    var temp;

    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j].toString() > array[j+1].toString()) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }         
        }               
    }
    return array;
}