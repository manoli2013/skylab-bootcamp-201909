/**
 * 
 * El método some() comprueba si al menos un elemento del array cumple con 
 * la condición implementada por la función proporcionada.
 *
 * @param {Array} array 
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 


function checkCondition(item) {
    return item > 5
}

function some(array, expression) {  
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (i=0; i< array.length; i++){
        if (expression(array[i])){
            return true 
        }
    } 
    return false
};


var arrayNumbers = [1,4,5,53,23,37];
// var arrayNumbers = []

// for(var i = 0 ; i < 10 ; i++){
//     var rnd = Math.floor(Math.random() * 10)+1; 
//     arrayNumbers[i] = rnd
// }

some(arrayNumbers, checkCondition);
