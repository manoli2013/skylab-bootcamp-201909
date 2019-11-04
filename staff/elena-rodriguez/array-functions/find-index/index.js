/**
 * Find the first element that accomplish a condition and returns its item. 
 * 
 * @param {Array} array we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} number that is the index of the element found. 
 * */

function findIndex (array, expression){
    
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
for (let i = 0; i < array.length; i++){
    if(expression(array[i])) {
        return i;
    }  
} 
 return -1;

} 