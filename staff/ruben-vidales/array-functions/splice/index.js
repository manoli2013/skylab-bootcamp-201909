/**
 * Add and delete elements in the array
 * @param {Array} array The array with the values
 * @param {number} start The start position to operate
 * 
 * @returns {Array} The deleted elements 
 */
function splice(array, start) {

    if (!(array instanceof Array)) throw TypeError(array + 'is not an array');

    var deleteCount = arguments[2] || 0;
    if (start < 0) start = (array.length) + start;


    var deleted = [];
    if (start >= array.length) start = array.length - 1;
    if (start + deleteCount > array.length) deleteCount = array.length - start;

    if (deleteCount) {

        for (var i = start; i < start + deleteCount; i++) {
            deleted[deleted.length] = array[i];
        }

        for (var i = start; i < array.length; i++) {
            if ((i + deleteCount) < array.length)
                array[i] = array[i + deleteCount];
        }

        array.length -= deleteCount;
    }

    if (arguments.length > 3) {
        for (var i = array.length - 1; i >= start; i--) {
            array[i + (arguments.length - 3)] = array[i];
        }
        for (i = 0; i < (arguments.length - 3); i++) {
            array[start + i] = arguments[i + 3];
        }
    }

    return deleted;
}