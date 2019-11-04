/**
 * MAP.
 * Returns a new array with an expression applied. 
 * 
 * @param {Array} array The array to iterate.
 * @param {expression} function which will return a new parameter.
 * 
 * @returns {newArray} The new array with the function applied.
 */


function map(arr, expression) { 
var newArr = [];
if (!(arr instanceof Array)) throw TypeError(arr + ' is not an array');
if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
   
for (let i = 0; i < arr.length ; i++)
   {newArr[i] = expression(arr[i])};

    return newArr;
};


