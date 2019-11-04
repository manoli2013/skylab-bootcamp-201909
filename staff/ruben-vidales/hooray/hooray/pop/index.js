/**
 * Take off the last element of the array
 * 
 * @returns {*} The eleminated element of the Hooray
 */
Hooray.prototype.pop = function () {
    if (this.length === 0) { return undefined };
    var aux = this[this.length - 1];

    delete this[this.length - 1];
    this.length--;
    return aux;
}