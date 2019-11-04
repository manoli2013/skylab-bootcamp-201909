/**
 * Add a new item at beggining of an array and unshifts each item into a higher index.
 * 
 * @param {Array} array The array on will add item at first .
 * @param {any} item The item will be added in the array.
 */
function unshift (array) {

    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    for (var i=((array.length-1)+(arguments.length-1)); i>0; i--) {
        array[i]=array[i-(arguments.length-1)];
    }
    for (var i=0; i<(arguments.length-1); i++) {
        array[i]=arguments[i+1];
    }

    return array.length;
}