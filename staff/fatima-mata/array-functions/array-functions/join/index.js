/**
 * Creates and returns a new string by concatenating all of the elements in an array
 *  separated by commas or a specified separator string.
 * 
 * @param {*} array origin array
 * @param {*} separator
 * @return{*} return the index where it finds the value passed by parameters
 * 
 */

function join(a, b) {

    if (!(a instanceof Array)) throw TypeError (a + ' is not an array')

    if(b === undefined)
        b =',';
    result = '';
    for (var i = 0; i < a.length; i++) {
        if (i === a.length - 1)
            result += a[i];
        else
            result += a[i] + b;
    }
    return result;

}