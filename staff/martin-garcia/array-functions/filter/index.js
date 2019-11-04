/**
 * 
 * Creates a new array with all elements that pass the test implemented by the provided function
 * 
 * @param {*} array Array to evaluate
 * @param {*} expression Function to evaluate
 */
function filter(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var auxArray = [];
    for (var a = 0; a < array.length; a++) {
        if (expression(array[a]))
            auxArray[auxArray.length] = array[a];
    }
    return auxArray;
}