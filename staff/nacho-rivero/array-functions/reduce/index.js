/**
 * Executed a reducer function on each element of the array, resulting a single output value.
 * @param {array} array The array to reduce.
 */

function reduce(array, expression) {

    if (arguments.length !== 2 && arguments.length !== 3) throw TypeError("Wrong number of arguments: two expected (Array, Callback function).");
    if (!(array instanceof Array)) throw TypeError("First argument must be an array.");
    
    var accumulator = 0;
    
    for (var i = 0; i < array.length; i++){
        if (i === 0) {
            
            expression(0, array[i], i, array);

        }
        if(i === 1){

            accumulator = expression(array[0], array[i], i, array);

        }

        if(i > 1) {

            accumulator += expression(accumulator, array[i], i, array);

        } 
    };
        
    return accumulator;
};
    