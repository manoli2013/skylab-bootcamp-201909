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
function join(arr, sep) {

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    if(sep === undefined)
        sep =',';
    result = '';
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1)
            result += arr[i];
        else
            result += arr[i] + sep;
    }
    return result;

}