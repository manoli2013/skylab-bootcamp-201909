/**
 * Modifies the original array, removing the first element
 * and relocates the following items
 * 
 * @returns {*} returns the deleted element or undefined if array.length === 0
 */
Hooray.prototype.shift = function() {

    var aux;
    if (this.length > 0) {
        aux = this[0];


        for (var a = 1; a < this.length; a++) {
            this[a - 1] = this[a];
        }
        this.length--;
        delete this[this.length - 1];
        return aux;
    }
    return aux;
}