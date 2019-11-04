/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the array.
 */
function push(array, item) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');

    if (typeof item === "undefined")
        return array.length;
    else
        array[array.length] = item

    return array.length
}