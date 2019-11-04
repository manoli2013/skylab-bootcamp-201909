/**
 * SPLICE
 * Changes the contents of an array by removing or replacing
 *  existing elements and/or adding new elements in place.
 * 
 * @param {Number} start Index for starting position.
 * @param {Number} delCount Index for the last position.
 * @param {*} items Index for the last position.
 * 
 * @returns {Array} An array containing the deleted elements.
 * If only one element is removed, an array of one element is returned.
 *  If no elements are removed, an empty array is returned.
 */

function splice(array, start, delCount) {

    if (!(array instanceof Array)) throw TypeError(array + ' is not an Array');

    var result = [];
    var newArray = [];
    var x = 0;
    var arrPos = 0;
    var itemsLen;
    var items = [];
    if (delCount === 'undefined') {
        itemsLen = arguments.length - 2;
        var index = 2;
    } else if (arguments.length === 3 && start !== 'undefined' && start >= 0 && delCount !== 'undefined') {
        itemsLen = 0;
    } else if (arguments.length === 2) {
        delCount = array.length - start;
        itemsLen = array.length - start;
    } else if (start < 0) {
        itemsLen = arguments.length - delCount + start;
        start = array.length + start;
    } else {
        itemsLen = arguments.length - 3
        var index = 3;
    }

    if (itemsLen !== 0) {
        for (var y = 0; y < itemsLen; y++) {
            items[y] = arguments[index];
            index++;
        }
    }
    var finalLength = array.length - delCount + itemsLen;
    for (var i = 0; i < delCount; i++) {
        result[i] = array[i + start];
    }
    var lol = false;
    while (x < finalLength) {
        if (x === start && lol === false) {
            for (var y = 0; y < delCount; y++) {
                arrPos++
            }
            if (itemsLen !== 0) {
                for (var y = 0; y < itemsLen; y++) {
                    newArray[x] = items[y]
                    x++
                }
            }
            lol = true
        } else {
            newArray[x] = array[arrPos]
            x++
            arrPos++
        }
    }
    array.length = newArray.length;
    for (var i = 0; i < array.length; i++) {
        array[i] = newArray[i]
    }
    return result;
};