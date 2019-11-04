/**
 * 
 * returns a shallow copy of a portion of anhooray into a newhooray object 
 * selected from begin to end (end not included) where begin and end represent
 *  the index of items in thathooray. The originalhooray will not be modified
 * 
 * @param {*} start 
 * @param {*} end 
 * @returns {*[]} 
 */
Hooray.prototype.slice = function(start, end) {
    if (!(typeof start === 'number') && !(start === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof end === 'number' || end === undefined)) throw TypeError("expected expression, got ,");

    var auxHooray = new Hooray();
    for (var a = (start || 0); a < (end || this.length); a++) {
        if (a >= (start || 0) && a < (end || this.length))
            auxHooray[auxHooray.length++] = this[a];

    }
    return auxHooray;
}