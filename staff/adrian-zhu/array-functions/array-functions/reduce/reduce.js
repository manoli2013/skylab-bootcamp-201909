/**
 * 
 * @param {*} arr 
 * @param {*} expression 
 * 
 * @throws {TypeError} arr is not an array
 * @throws {TypeError} expression is not a function
 * 
 * @returns {Array}
 */


function reduce(arr, expression) {

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    
    var aux = 0;
    for (var i = 0; i < arr.length; i++) 
        aux = expression(aux, arr[i]);

    if (aux [0] === '0')
        aux = aux.substring(1);
    

    return aux;

}


