/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} arr The array to push elements to.
 * 
 * @returns {number} The new lenth of the array.
 */
function pop(arr){

    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an array');
    if (arr.length === 0) { return undefined };

    var lastItem = arr[arr.length - 1];
    arr.length --;
    return lastItem;
}
