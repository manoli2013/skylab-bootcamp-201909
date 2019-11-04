/**
 * Create a new array with all the elements that accomplish the condition of the function given.
 * 
 * @param {Array} array 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {Array} newArr with the items of the first array that accomplished the test.
 */


// function checkCondition (item){
//     return item < 25

// }

function filter(array, expression){

    if (!(array instanceof Array)) throw TypeError(array + " is not an array");
    if (typeof expression !== "function") throw TypeError(expression + " is not a function");

    var newArray = [];

    for (i=0; i<array.length;i++){
        if (expression(array[i])){
            newArray[newArray.length] = array[i]
        }
    } 
    return newArray
    
};

// var arrayNumbers = 3;

// console.log(filter(arrayNumbers, checkCondition));
