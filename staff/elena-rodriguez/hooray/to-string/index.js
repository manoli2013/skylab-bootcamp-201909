/**
 * TOSTRING.
 * Converts an Array into a String.
 *
 *  
 */
Hooray.prototype.toString = function () {
    var string='';
    
    for (var i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=',';
    }
    return string;
}