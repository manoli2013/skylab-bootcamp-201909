/**
 * @param {separator}
 * 
 * @returns {Array}
 */

Hooray.prototype.join = function(sep){

    if(sep === undefined)
        sep =',';
    var result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + sep;
	} 
    return result;
}