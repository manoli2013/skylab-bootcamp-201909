// --------------------------JOIN--------------------------------------
/**
 * reates and returns a new string by concatenating all of the elements in an array
 *  separated by commas or a specified separator string.
 * 
 * @param {*} array origin array
 * @param {*} sep separator
 * 
 * @return{index} return the index where it finds the value passed by parameters
 * 
 */
Hooray.prototype.join = function(sep){

    if(sep === undefined)
        sep =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + sep;
	} 
    return result;
};