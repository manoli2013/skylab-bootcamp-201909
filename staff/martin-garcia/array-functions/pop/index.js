/**
 * Removes the last item of the array, and return it
 * 
 * @param {*[]} array 
 * @returns {any} return the last item, now removed
 */
function pop(array) {
    if (array.length === 0) return undefined;

    var lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement
}