/**
 * Check all elements of the array pass the condition implemented by thee function.
 * @param {*} array The array introduced to apply the every function.
 * @param {*} condition Condition that sould pass all elements of the array to be true.
 */

function every(array, condition) {

    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function fill')
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    for(var i=0;i<array.length;i++)

    {
        if(array[i]===condition){
    
        return true;

    } else  {
        return false;
    }
    }
}