/**
 * Deletes the first item of an array and shifts each item into a lower index.
 * Returns de removed item of the array.
 * 
 * @param {Array} array The array on will delete the first item.
 * 
 * @returns {any} The item deleted from the array.
 */
function shift (array) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    if (array.length===0) return undefined;
    var itemShifted = array[0];

    for (var i=1; i<array.length; i++) {
        array[i-1]=array[i];
    }
    array.length--;
    return itemShifted;
}