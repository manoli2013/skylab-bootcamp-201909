/**
 * Find the position in the array where the searchedElement is in
 * 
 * @param {Array} array The array to examinate
 * @param {item} searchedElement The element to search for
 * @param {number} from The start position of the check
 * 
 * @returns Returns the position if the searchElement is founded, -1 if not
 */
function indexOf(array, searchedElement, from) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var start = from ? from : 0;
    for (let i = start; i < array.length; i++) {
        if(searchedElement == array[i]){
            return i;
        }
    }
    return -1;
}