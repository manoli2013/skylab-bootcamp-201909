/**
 * 
 * @param {Array} arr 
 * @param {Function} expression: variation that you want to operate;
 * 
 * @throws {TypeError}: when arr is not arr;
 * @throws {TypeError}: when expression is not a function;
 * 
 * @returns {Boolean} aux => boolean 
 */

function some(arr,expression) { 

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var isElement = false;
    for (i = 0; i < arr.length; i++) {
        if(expression(arr[i])) {
        isElement = true;
    }
}
    return isElement
}
   
