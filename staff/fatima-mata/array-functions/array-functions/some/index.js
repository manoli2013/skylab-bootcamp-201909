
 /**
 * Checks if at least one element of the array complies with the condition implemented by the specific function.
 * 
 * @param {*} array The array to evaluate elements to the condition given 
 * @param {*} expression The expression to evaluate in each item of the array.
 * @returns {*} returns true if the callback function returns a true value for any element
 * in the array; otherwise, false.
 * 
 */

function some(array,expression) { 

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var a = false;
    for (i = 0; i < array.length; i++) {
        if(expression(array[i])) {
        a = true;
        };
    };
    return a;
};

