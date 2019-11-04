/**
 * sort array from low value to high value
 * 
 * @param {*} array 
 * 
 * 
 */
function sort(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is no an array');

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