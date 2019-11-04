/**
 * INCLUDES.
 * Itearates an hooray and searchs if an item is included or not in a hooray.
 * 
 * @param {Function} expression The item that want to know if is included on the hooray.
 * @param {Number} start Optional. The starting position to start searching.
 *                       Default 0. If start is not a valid number, or < 0, Default starting.
 * 
 * @returns {Boolean} True if item's included on hooray, false if not.
 */

Hooray.prototype.includes = function (item) {

    var start = arguments[1] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? 0 : start;

    for (i=0; i<this.length; i++) {
        if (this[i]===item)  return true
    }
    return false;
}