/**
 * 
 * returns the value of the first element in the provided 
 * array that satisfies the provided testing function.
 * 
 * @param {*[]} array The array to find the first value that satisfies testing function
 * @param {function} expression function to test each element
 * @returns {*} The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined 
 * @throws {TypeError} Array is not defined
 * @throws {TypeError} Error: missing argument when calling function Array.prototype.find
 */
function find(array, expression) {
    if (array === undefined) throw TypeError(array + " is not defined");
    if (expression === undefined) throw TypeError(expression + " is not a function");

    for (var a = 0; a < array.length; a++) {
        if (expression(array[a])) {
            return array[a];
        }
    }

    return undefined;
}