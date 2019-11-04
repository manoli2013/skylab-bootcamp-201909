
/**
 * Creates and returns a new string by concatenating all of the elements in an array
 *  separated by commas or a specified separator string.
 * 
 * @param {*} array origin array
 * @param {*} separator
 * @return{*} return the index where it finds the value passed by parameters
 * 
 */

Hooray.prototype.join = function(a){

    if(a === undefined)
        a =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + a;
	} 
    return result;
};