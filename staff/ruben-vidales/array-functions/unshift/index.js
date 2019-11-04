/**
 * Add new elements in the beggining of the array
 * @param {Array} array The array to keep the elements
 * @param {...arguments} elements to add in the beggining of the array
 * 
 * @returns {number} the array length after add the elements
 */
function unshift (array){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    // OPT 1
    var aux = [];
    for(var c = 0; c < array.length; c++){
        aux[c] = array[c];
    }
    var cont = 0;
    for(var i = 1; i<arguments.length ;i++){
        array[cont] = arguments[i];
        cont++;
    }
    for(var j = 0; j<aux.length; j++ ){
        array[cont] = aux[j];
        cont++;
    }
    return array.length;
    // OPT 2
    /*
    for (var j = array.length-1; j>-arguments.length+1;j--){
        array[j+arguments.length-1] = array[j];
    }

    for (var k = 0; k<arguments.length-1;k++){
        array[k] = arguments[1+k];
    }
    return array.length;
    */
}