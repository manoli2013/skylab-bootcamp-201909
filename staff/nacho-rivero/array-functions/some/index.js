/**
 * Method test whether at least one element in the array pass the test. It returns a boolean expression.
 * @param {array} array The array to do the test.
 * @param {expression} expression The function test provided.
 */

function some(array,expression){

    if(!(array instanceof Array)) throw TypeError(`${array} is not an array`);
    if(!(expression instanceof Function)) throw TypeError (`${expression} is not a function`);

    var pass = false;

    for (var i=0; i<array.length; i++){
        
        if (expression(array[i])){
            pass = true;
        }
    }
    return pass;
}