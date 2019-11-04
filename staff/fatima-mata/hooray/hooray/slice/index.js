/**
 * 
 * Returns a shallow copy of a portion of anhooray into a newhooray object selected from begin to end (end not included) where begin and b represent
 * the index of items in thathooray. The originalhooray will not be modified
 * 
 * @param {*}  
 * @param {*} 
 * @returns {*} 
 * 
 */

Hooray.prototype.slice = function(a, b) {
    if (!(typeof a === 'number') && !(a === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof b === 'number' || b === undefined)) throw TypeError("expected expression, got ,");

    var c = new Hooray();
    for (var i = (a || 0); i < (b || this.length); i++) {
        if (i >= (a || 0) && i < (b || this.length))
            c[c.length++] = this[i];
    }
    return c;
}