/**
 * 
 * @param {*} arr array
 * @param {*} expression function
 * 
 * @throws {TypeError} arr is not an Array;
 * @throws {TypeError} expression is not a function;
 * 
 * @returns {Value} the first item which complete the expression
 */

function find(arr,expression) { 

    if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');

    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');


    for(i = 0; i < arr.length; i++) {
        if(expression(arr[i])) {
           return arr[i]
        }  
    }
    return undefined
}
