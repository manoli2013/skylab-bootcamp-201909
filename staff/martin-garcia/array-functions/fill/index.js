/**
 * method fills (modifies) all the elements of an array from a start
 *  index (default zero) to an end index (default array length) with a
 *  static value. It returns the modified array.
 * 
 * @param {*} array Array to modify 
 * @param {*} value value to insert in each element
 * @param {*} start where start to modify the array
 * @param {*} end  where stop to modify the array
 * @throws {TypeError} When array is not defined
 */
function fill(array, value, start, end) {
    if (!(array instanceof Array)) throw TypeError(array + " is not an Array");
    if (!(typeof start === 'number') && !(start === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof end === 'number' || end === undefined)) throw TypeError("expected expression, got ,");

    if (start === undefined && end === undefined) {
        for (var a = 0; a < array.length; a++)
            array[a] = value;
    } else if (start !== undefined) {
        for (var a = (start || 0); a < (end || array.length); a++) {
            array[a] = value;
        }
    }

    return array;
}