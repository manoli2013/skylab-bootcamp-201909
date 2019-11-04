/**
 * returns the position of the first occurrence of a specified value in a string.   
 * This method returns -1 if the value to search for never occurs.
 * 
 * @param {*[]} array Array to find the element
 * @param {*} element Element to find
 * @param {number} position position to start to find
 * @returns {number} returns the index if there is match, or -1 if there isn't
 */
function indexOf(array, element, position) {
    if (element !== undefined && element !== null && array !== undefined && array !== null) {
        if (position === undefined || position === 0) {
            for (var a = 0; a < array.length; a++)
                if (array[a] === element) return a;
        } else if (position > 0) {
            for (var a = position; a < array.length; a++)
                if (array[a] === element) return a;
        } else {
            Math.abs(position) > array.length ? position = 0 : position = array.length + position;
            for (var a = position; a < array.length; a++) {
                if (array[a] === element) return a;
            }
        }
    }
    return -1
}