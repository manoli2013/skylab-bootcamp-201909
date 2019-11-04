/**
 * Iterates on every item of an array and returns a new array with those items that accomplish one or several conditions.
 * * 
 * @param {Array} array The array to filter items.
 * @param {Function} function that specifies the condition to be accomplished.
 * 
 * @returns {Array} The new array.
 * @throws {TypeError} If Array is not an awway.
 * @throws {TypeError} If Function is not a function.
 */

function filter(array,expression) { 
    if (!(array instanceof Array)) throw TypeError(array + " is not an array");
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if(expression(array[i])) {
        newArray[newArray.length] = array[i];
    }
}
    return newArray;
}


