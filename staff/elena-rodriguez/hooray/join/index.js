/** 
 * JOIN.
 * Converts an Array into a String merging each item with the separator if it's provided.
 * 
 * @param {String} separator Optional -- Separator between each element. 
 *                           If an separator is omited, as default separator is a coma.
 * 
 * @returns {string} The Hooray as a string.
 */
Hooray.prototype.join = function () {
        
    var separator = arguments[0] || ",";
    var string='';

    for (var i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=separator;
    }
    return string;
};
