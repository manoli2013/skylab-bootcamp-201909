/**
 * returns the position of the first occurrence of a specified value in a string.   
 * This method returns -1 if the value to search for never occurs.
 * 
 * @param {*} element Element to find
 * @param {number} position position to start to find
 * @returns {number} returns the index if there is match, or -1 if there isn't
 */
Hooray.prototype.indexOf = function(element, position) {
    if (element !== undefined && element !== null && this !== undefined && this !== null) {
        if (position === undefined || position === 0) {
            for (var a = 0; a < this.length; a++)
                if (this[a] === element) return a;
        } else if (position > 0) {
            for (var a = position; a < this.length; a++)
                if (this[a] === element) return a;
        } else {
            Math.abs(position) > this.length ? position = 0 : position = this.length + position;
            for (var a = position; a < this.length; a++) {
                if (this[a] === element) return a;
            }
        }
    }
    return -1
}