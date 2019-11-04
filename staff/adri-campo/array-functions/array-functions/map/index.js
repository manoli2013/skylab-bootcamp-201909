/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 * @param {Array} array The array to pop the value from
 * @returns {Function} The value deleted from the expression 
 * 
 */

function map(array, expression) {
    if(!(array instanceof Array)) throw TypeError(undefined + " is not an array")
    if (typeof expression !== "function") throw TypeError(expression + " is not a function")

    var newArr = []

    for (var i = 0; i < array.length; i++){
        newArr[newArr.length] = expression(array[i])
    }
    return newArr

};


// var arrayexample = [2,3,5,6];

// function modify (item) {
//     return item * 2
// };

// console.log(map,modify);





