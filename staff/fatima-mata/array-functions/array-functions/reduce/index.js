/*
 * Reduce all the elements of the array to a only one value
 * 
 * @param {*} array The array to reduce 
 * @param {*} expression The expression to calculate the result
 * @returns The calculated result
 * 
 */

function reduce(a, expression) {

    if (!(a instanceof Array)) throw TypeError (a + ' is not an array')
    
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    
    var b = 0;
    for (var i = 0; i < a.length; i++) 
        b = expression(b, a[i]);

    if (b [0] === '0')
        b = b.substring(1);

    return b;
};


