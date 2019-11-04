/**
 * INDEX-OF.
 * Returns the index of an element found into the hooray. If the element is not found, returns -1.
 * @param {Hooray} The initial hooray to look into it. 
 * @Returns {*} element with the index of the element searched or -1 in case the element is not into de Hooray. 
 * 
 */

Hooray.prototype.indexOf = function (item) {
    var start = arguments[1] || 0;

    if (typeof(start) !== "number") start=0;

    start = start < 0 ? this.length + start : start;

    for (var i=start; i<this.length; i++) {
        if (this[i]===item) return i;
    }
    return -1;
}