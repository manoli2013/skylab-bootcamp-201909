/**
 * 
 * FINDINDEX returns the index of the first element in the array that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {Array} array 
 * @param {Function} expresion 
 * 
 * @returns {Number} number is index of position. If does not find, returns -1
 * @throws {Error} error if array is not indicated, string, number;
 * @throws {Error} error if function is not indicated, string or number;
 }
 * 
 */
function findIndex(array, expression) {

    if (!(array instanceof Array)) throw TypeError(array + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    for (var i = 0; i < array.length; i++) {
        if (expression(array[i])) {
            return i;
        }
        
    }

    return -1;
}





