/**
 * 
 * Determines whether an array includes a certain value among its entries,
 *  returning true or false as appropriate
 * 
 * @param {*} array to evaluate
 * @param {*} element element to find into the array
 * @returns {boolean} It returns a Boolean value
 */
function includes(array, element) {
    if (element === undefined || element === null) return false;

    for (var a = 0; a < array.length; a++) {
        if (array[a] === element) return true;
    }

    return false;
}