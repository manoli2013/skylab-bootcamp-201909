/**
 * SLICE.
 * @Returns {*} the selected elements in a hooray, as a new hooray.
 *  
 */

Hooray.prototype.slice = function () {

    var start = arguments[0] || 0;
    if (typeof(start) !== "number") start = 0;
    start = start < 0 ? this.length + start : start;
    var end = arguments[1] || this.length;
    if (typeof(end) !== "number") end = 0;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;

    var newHooray = new Hooray ();   

    for (var i=start; i<end; i++) {
        newHooray[newHooray.length++]=this[i];
    }
    return newHooray;
}