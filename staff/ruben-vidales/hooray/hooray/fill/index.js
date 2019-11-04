/**
 * Fill the elements of the hooray with value of the parameter
 * 
 * @param {*} val The value to fill the hooray
 * @param {number} init the position to start to fill
 * @param {number} end the position to end to fill
 */
Hooray.prototype.fill = function (val, init, end) {
    var endParam = end ? end : this.length;
    var startParam = init ? init : 0;

    for (let i = 0; i < this.length; i++) {
        if (i >= startParam && i <= endParam) {
            this[i] = val;
        }
    }
    return this;
}
