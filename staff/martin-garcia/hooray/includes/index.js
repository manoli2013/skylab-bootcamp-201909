/**
 * 
 * Determines whether an Hooray includes a certain value among its entries,
 *  returning true or false as appropriate
 * 
 * @param {*} element element to find into the array
 * @returns {boolean} It returns a Boolean value
 */
Hooray.prototype.includes = function(element) {
    if (element === undefined || element === null) return false;

    for (var a = 0; a < this.length; a++) {
        if (this[a] === element) return true;
    }

    return false;
}