/**
 * Removes the last item of the array, and return it
 * 
 * @param {*} 
 * @returns {*} return the last item, now removed
 * 
 */

function pop(array) {

    if (array.length === 0) return undefined;

    var a = array[array.length - 1];
    array.length = array.length - 1;

    return a;
};