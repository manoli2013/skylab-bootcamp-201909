/**
 * Returns a new string that contains each element of array, 
 *  separate by ,
 * 
 * @param {*[]} array array to concat 
 * @param {*} caract caract that separates the elements  
 * @returns {string} result 
 */
Hooray.prototype.join = function(caract) {

    caract === undefined ? caract = ',' : caract += '';

    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result += this[i] + caract;
    }
    return result;
}