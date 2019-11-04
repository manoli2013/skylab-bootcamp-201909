/**
 *
 * @param {Array} array The array 
 * @param {Function} expression The expression yo evaluate the array
 * @return {Boolean} Depending if the condition at the end
 */

function every(array, expression){
    for (var i=0; i < array.length; i++){
        if(expression(array[i]) === false) return false
    }
    return true
};   


function check (item){
    return item < 6 
}


var arrayNumbers = [1,2,3,4,5]

every(arrayNumbers, check)