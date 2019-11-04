/**
 * Returns the index of the fisrt element in the array that satisfies the providing test function. If any element pass the test, it returs -1.
 * @param {*} array The array given.
 * @param {*} expression The test function.
 */

function findIndex(array , expression){
    if(!arguments.length) throw TypeError ('missing argument 0 when calling function');
    if(!(array instanceof Array)) throw TypeError(`${array} is not an array`);
    if(!(expression instanceof Function)) throw TypeError (`${expression} is not a function`);

    for(var i = 0 ; i<array.length ; i++){

        if(expression(array[i])){

            return i;
        }
        return -1
    }
}