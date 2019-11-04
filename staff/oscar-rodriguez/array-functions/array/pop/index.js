/**
 * Deletes the last item of an array and returns de deleted item.
 * 
 * @param {Array} array The array on we will delete last item
 * 
 * @returns {any} returns de last item deleted on the array
 */
function pop (array) {
    
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    if (array.length===0) return undefined;

    var result=array[array.length-1];
    array.length-=1;
    
    return result;
} 