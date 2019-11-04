/**
 * It shows you all the items merged using a string value that is given at the beginning.
 * If no value is given, then the function gives you ",".
 * 
 * @param {Array} array 
 * @param {String} String value you give to merge the items
 */

Hooray.prototype.join = function(hongda){

    if(hongda === undefined)
        hongda =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + hongda;
	} 
    return result;
}