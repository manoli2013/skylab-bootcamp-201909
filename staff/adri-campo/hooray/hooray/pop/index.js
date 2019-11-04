/**
 * Deletes the last item of an array and returns de deleted item.
 * @param {Hooray} hooray we want to test.
 * @returns {number} returns de last item deleted on the array
 */

Hooray.prototype.pop = function () {

    if (this.length === 0) return undefined;

    var result = this[this.length - 1];
    this.length--;

    return result;
}