/**
 * 
 * returns a shallow copy of a portion of an array into a new array object 
 * selected from begin to end (end not included) where begin and end represent
 *  the index of items in that array. The original array will not be modified
 * 
 * @param {*[]} array 
 * @param {*} start 
 * @param {*} end 
 * @returns {*[]} 
 */
function slice(array, start, end) {

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
    if (!(typeof start === 'number') && !(start === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof end === 'number' || end === undefined)) throw TypeError("expected expression, got ,");

    var auxArray = [];
    for (var a = (start || 0); a < (end || array.length); a++) {
        if (a >= (start || 0) && a < (end || array.length))
            auxArray[auxArray.length] = array[a];
    }
    return auxArray;
}