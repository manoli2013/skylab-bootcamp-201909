/**
 * Find an element inside the hooray and returns the position
 * 
 * @param {*} searchedElement The element to search inside the hooray
 * @param {number} from The start position to check the hooray
 * 
 * @returns {number} The position of the occurrence, -1 if not appears
 */
Hooray.prototype.indexOf = function (searchedElement, from) {
    var start = from ? from : 0;
    for (let i = start; i < this.length; i++) {
        if (searchedElement == this[i]) {
            return i;
        }
    }
    return -1;
}