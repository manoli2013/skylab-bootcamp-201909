/**
 * POP.
 * Deletes the last item of an hooray and returns de deleted item.
 *  @param {hooray}  initial hooray where we pop things. 
 * @returns {any} returns de last item deleted on the hooray.
 */
Hooray.prototype.pop = function () {
    
    if (this.length===0) return undefined;

    var result = this[this.length-1];
    
    delete this[this.length-1];
    this.length-=1;
    
    return result;
};