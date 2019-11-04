/**
 * Concatenate every element of the hooray in a unique string with the separator indicated
 * 
 * @param {string} separator The separator for the strinf
 * 
 * @returns {string} The resultant array
 */
Hooray.prototype.join = function (separator) {
    var sep = '';
    if (separator === undefined) {
        sep = ',';
    }
    else {
        sep = separator;
    }
    var aux = '';
    if (this.length > 0) {
        for (let i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                aux += this[i];
            }
            else {
                aux += this[i] + sep;
            }
        }
        return aux;
    }
    else {
        return aux;
    }
};