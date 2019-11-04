/**
 * Check if the value is equal to an element of the hooray
 * 
 * @param {*} find_value The element to find
 * @param {number} param_start The position to start to check
 * 
 * @returns {boolean} True if the value appears, false if not
 */
Hooray.prototype.includes = function (find_value, param_start) {
    var start = param_start ? param_start : 0;

    for (let i = start; i < this.length; i++) {
        if (this[i] === find_value) {
            return true;
        }
    }
    return false;
}