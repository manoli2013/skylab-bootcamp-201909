/**
 * Filter method creates a new array with all the elements that fullfill
 * the established condition by the given function. the results of the function 
 * 
 * @param {Array} array The array to be filtered.
 * @param {Condition} condition Callback that checks the condition on each element of the array.
 * @param {currentValue} array[i] The current element of the array that its being processed.
 * @param {index} i The current index inside the array.
 * @returns {result} result[i] Result is the new array composed by the elements created through the callback function.
 */

function filter(array, condition) {

    if(!(array instanceof Array))throw TypeError(array + ' is not an array');
    if(!(condition instanceof Function)) throw TypeError (condition + ' is not a function');

    var result=[];
    var count=0;
    
        for(var i = 0; i<array.length; i++){
            if(condition(array[i])){
                result[count] = array[i];
                count++;
            }

            return result;
        }

    }
    