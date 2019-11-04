/**
 * 
 *  Is used to merge two or more arrays. This method does not change the existing 
 * arrays, but instead returns a new array.
 * 
 * @param {*} element element or arrays to concat into array 
 * @returns that's the new array 
 */
Hooray.prototype.concat = function(element) {
    var auxArray = [];

    for (var a = 0; a < this.length; a++) {
        auxArray[a] = this[a];
    }

    if (element instanceof Array) {
        var index = 0;
        for (var b = this.length; b < this.length + element.length; b++) {
            auxArray[b] = element[index];
            index++;
        }
    } else {
        auxArray[this.length] = element;
    }
    return auxArray;
}