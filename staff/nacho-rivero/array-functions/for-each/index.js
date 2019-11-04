/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 */
function forEach(array, expression) {
        if (!(array instanceof Array)) throw TypeError(array + ' is not an array')
        if (typeof expression !== 'function') throw TypeError(expression + ' is not a function')

        for (var i = 0; i < array.length; i++) 
            expression(array[i]);
    }
    
    var numbers = [1, 2, 3, 4, 5]; //ejercicio de función recursiva
    
    function forEcho(array, i){
        var counter = i;
        counter++
        if(counter !== array.length){
            console.log('loading');
            forEcho(numbers, counter);
        } else {
            console.log(numbers);
        }
    }

    forEcho(numbers, 0)

    var numbers = [1, 2, 3, 4, 5]; //ejercicio de función recursiva
    
    (function forEcho(array, i){
        var counter = i;
        counter++
        if(counter !== array.length){
            console.log('loading');
            forEcho(numbers, counter);
        } else {
            console.log(numbers);
        }
    })(numbers, 0);