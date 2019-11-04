/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 /** 
 * @param {Array} array The array to pop the value from
 * @returns {Function} The value deleted from the expression 
 * 
 */

function pop(array) {
        if (!(array instanceof Array)) throw TypeError(array + " is not an array");
        if (!(array instanceof Array)) throw TypeError(null + " is not an array");

        var value = array[array.length - 1];
        array.length--;

        return value;
}














