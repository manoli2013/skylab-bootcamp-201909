/**
 * Sort array from low value to high value
 * 
 * @param {*} array 
 * 
 */

Hooray.prototype.sort = function() { 	
    var a;
    for (var i = 1; i < this.length; i++) {
        for (var j = 0; j < this.length - i; j++) {
            if (this[j].toString() > this[j+1].toString()) {
                a = this[j];
                this[j] = this[j+1];
                this[j+1] = a;
            }         
        }               
    }
    return this;
};