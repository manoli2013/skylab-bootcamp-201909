/**
 * Delete the first element of the Hooray
 * 
 * @returns the deleted element
 */
Hooray.prototype.shift = function () {
  
    var deleted = this[0];
    for (var i = 1; i < this.length; i++) {
        this[i-1] = this[i]; 
    }
    delete this[this.length-1] 
    if(this.length > 0) this.length = this.length - 1;
    return deleted;
}