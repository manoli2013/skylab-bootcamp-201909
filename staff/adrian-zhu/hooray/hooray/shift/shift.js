/**
 * 
 * @throws {TypeError} arr is not array
 * @returns {value} return the first item of array; 
 */

Hooray.prototype.shift = function shift(){

    var firstItem = this[0];
    for(var i = 1; i < this.length; i++) {
        this[i-1] = this[i]
    }
    this.length--;
    return firstItem;
}
