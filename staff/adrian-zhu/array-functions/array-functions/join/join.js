/**
 * 
 * @param {Array} arr : array
 * @param {Separator} sep: separator
 * 
 * @throws {TypeError} : throw error arr
 * 
 * @returns a new string container;
 */

function join(arr, sep) {

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    if(sep === undefined)
        sep =',';
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1)
            result += arr[i];
        else
            result += arr[i] + sep;
    }
    return result;

}