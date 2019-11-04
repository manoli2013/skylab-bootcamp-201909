/**
 * Reduce all the elements of the array to a only one value
 * 
 * @param {Array} array The array to reduce 
 * @param {function} expression The expression to calculate the result
 * 
 * @returns The calculated result
 */
function reduce(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux = 0;
    for (var i = 0; i < array.length; i++) {
        aux = expression(aux, array[i]);  
    }
    //Fix for start
    if(aux[0] === '0'){
         aux = aux.substring(1);
    }
    return aux;
}