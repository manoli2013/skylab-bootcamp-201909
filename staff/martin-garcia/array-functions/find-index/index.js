/**
 * 
 * returns the index of the first element in the array that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {*[]} array 
 * @param {*} expresion 
 * 
 */
function findIndex(array, expression) {

    if (!(array instanceof Array)) throw TypeError(array + " is not defined");
    if (typeof expression !== 'function') throw TypeError(expression + " is not a function");

    var result = -1;

    for (var a = 0; a < array.length; a++) {
        if (expression(array[a])) return a;
    }

    return result;
}