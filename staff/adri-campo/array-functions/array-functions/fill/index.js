/**
 * Describes a test suite.
 * 
 * @param {string} title The test suite title
 * @param {*} expression The tests to be run
 */


function fill (array, item) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (!(array instanceof Array)) throw TypeError(null + ' is not an array');
    

    if (arguments.length < 2 ) item = undefined;
    var start = arguments.length > 2 ? arguments[2] : 0;
    var end = arguments.length > 3 ? arguments[3] : array.length;
    for (var i = start; i < end; i++) {
        array[i] = item;
    } 
}

// var arrayNumbers = [1, 3, 4, 6, 7, 8, 6];
// fill(arrayNumbers, 2, 3, 5);

