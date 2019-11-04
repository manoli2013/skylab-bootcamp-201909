/**
 * method fills (modifies) all the elements of an hooray from a start
 *  index (default zero) to an end index (default hooray length) with a
 *  static value. It returns the modified hooray.
 * 
 * @param {*} value value to insert in each element
 * @param {*} start where start to modify the hooray
 * @param {*} end  where stop to modify the hooray
 * @throws {TypeError} When hooray is not defined
 */
Hooray.prototype.fill = function(value, start, end) {
    if (!(typeof start === 'number') && !(start === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof end === 'number' || end === undefined)) throw TypeError("expected expression, got ,");

    if (start === undefined && end === undefined) {
        for (var a = 0; a < this.length; a++)
            this[a] = value;
    } else if (start !== undefined) {
        for (var a = (start || 0); a < (end || this.length); a++) {
            this[a] = value;
        }
    }

    return this;
}