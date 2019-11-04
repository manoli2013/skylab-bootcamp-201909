/**
 * 
 * @param {*} arr 
 * @param {*} expression 
 * 
 * @throws {TypeError} if arr is not array
 * @throws {TypeError} if expression is not function
 * 
 * @returns {Array} new array filted
 */


function filter(arr,expression) { 

    if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var newArr = [];

        for (i = 0; i < arr.length; i++) {
        if(expression(arr[i])) {
        newArr[newArr.length] = arr[i]
        }
    }   
    return newArr
}



