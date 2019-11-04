/**
 * creates a new array with all elements that pass the test implemented by the expresion.
 * 
 * @param {*} array array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 * 
 * @return{newArray} returns in a new array with the values ​​that meet the expression
 */
function filter(array, expression) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')
    var newArray = [];
    var boleana;
    var j = 0;
	for (var i = 0; i < array.length; i++) {    
        boleana = expression(array[i])   
        if (boleana) {
            newArray[j]=array[i]
            j++
        }           
    }
    return newArray;
}