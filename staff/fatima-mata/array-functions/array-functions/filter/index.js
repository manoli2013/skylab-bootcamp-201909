/**
 * Create a new array with all the elements that accomplish the condition of the function given. 
 * 
 * @param {*} array
 * @param {*} expression we use to test the elements. 
 * @returns {*} new array with the items of the first array that accomplished the test. 
 * 
 */

function filter(arr,expression) { 

    if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');
    
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var a = [];

        for (i = 0; i < arr.length; i++) {
        if(expression(arr[i])) {
        a[a.length] = arr[i]
        };
    }   
    return a;
}



