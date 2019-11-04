/**
 * 
 * @param {*} arr : arr
 * @param {*} expression : expression
 * 
 * @throws {TypeError}: arr is not array
 * @throws {TypeError}: expression is not a function
 * 
 * @returns{} 
 */

function map(arr, expression) {


    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')


    var result = [];
  
    for (var i = 0; i < arr.length; i++)
        result[i] = expression(arr[i]);
  
    return result;
  }
