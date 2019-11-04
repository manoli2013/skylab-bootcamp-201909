/**
 * 
 * @param {Array} arr 
 * @param {Function} expression 
 * 
 * @throws {TypeError} arr is not an array
 * @throws {TypeError} expression is not a function
 * 
 * @returns {Array}
 */


function reduce(arr, expression) {

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

    var temp = 0;

    for (var i = 0; i < arr.length; i++) 
        temp = expression(temp, arr[i]);

    if (temp [0] === '0')
        temp = temp.substring(1);


    return temp;

}