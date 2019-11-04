/**
 * Return the array with reverse order
 * 
 * @param {Array} array The array to reverse the order of the elements 
 * 
 * @returns the array ordered
 */
function reverse(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array')

    var firstIndex = 0;
    var endIndex = array.length - 1;

    if (endIndex > firstIndex) {
        for (var i = 0; i < endIndex; i++) {
            var temp = array[firstIndex];
            array[firstIndex] = array[endIndex];
            array[endIndex] = temp;
            firstIndex++;
            endIndex--;
        }
    }
    return array;
};
