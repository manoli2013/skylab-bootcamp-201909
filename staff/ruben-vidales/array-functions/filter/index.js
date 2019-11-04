/**
 * Returns an array with the values that accomplish the requeriments of the expression
 * 
 * @param {*} array the array to search
 * @param {*} expression the expression that checks if the value accomplish the rules
 * 
 * @returns {Array} the array contains the values that accomplish the expression
 */
function filter(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   
    var aux = [];
    var cont = 0;
    for (let i = 0; i < array.length; i++) {
        if( expression(array[i])){
            aux[cont] = array[i];
            cont++;
        }
    }
    return aux;
}