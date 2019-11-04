/**
 * Add new elements in the beggining of the array
 * 
 * @param {*} array The array to keep the elements
 * @param {*} elements to add in the beggining of the array
 * @returns {*} the array length after add the elements
 * 
 */

function unshift (array){

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var a = [];
    for(var c = 0; c < array.length; c++){
        a[c] = array[c];
    };
    var cont = 0;
    for(var i = 1; i<arguments.length ;i++){
        array[cont] = arguments[i];
        cont++;
    };
    for(var j = 0; j<a.length; j++ ){
        array[cont] = a[j];
        cont++;
    };
    return array.length;
};