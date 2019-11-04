/**
 * Create an a result array from slice an original
 * 
 * @param {Array} array The array to operate 
 * @param {number} begin The start position
 * @param {number} end The end position
 * 
 * @return {Array} The new calculated array
 */
function slice (array, begin, end) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    var aux = [];
    var st = begin ? begin : 0;
    var ed = end ? end : array.length;
    var cont = 0;
    for(var i = st; i < ed ;i++){
        aux[cont] = array[i];
        cont++;
    }
    return aux;
}