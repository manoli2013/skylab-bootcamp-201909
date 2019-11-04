/**
 * Returns a new array with the values of the original array and the values of the parameters
 * @param {Array} array The original array to concatenate the others
 * @param {...Array} args The rest of the elements to concatenate 
 * @returns {Array} The results to concatenate all arrays recived through the arguments
 */
function concat(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var aux = array;
    var cont = array.length;
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                aux[cont] = arguments[i][j];
                cont++;
            }
        } else if (arguments[i] !== undefined){
            console.log(arguments[i]);
            aux[cont] = arguments[i];
            cont++;
        }
    }
    return aux;
}