/** 
 * Deletes the first item of a hooray and shifts each item into a lower index. Returns de removed item of the hooray.
 * 
 * @param {*} initial hooray array given. 
 * @param {*} other arguments given. 
 * @returns {*} The item deleted from the hooray.
 * 
 */

Hooray.prototype.shift = function  () {
    
    if (this.length===0) return undefined;
    var a = this[0];
    for (var i=1; i<this.length; i++) {
        this[i-1]=this[i];
    };
    delete this[this.length-1];
    this.length--;
    return a;
};