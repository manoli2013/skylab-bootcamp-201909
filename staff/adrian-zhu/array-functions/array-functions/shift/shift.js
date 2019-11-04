/**
 * 
 * @param {Array} arr: correspond array of the operation
 * @throws {TypeError} arr is not array
 * @returns {value} return the first item of array; 
 */

function shift(arr){

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    var firstItem = arr[0];
    for(var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]
    }
    arr.length--;
    return firstItem;
}



 