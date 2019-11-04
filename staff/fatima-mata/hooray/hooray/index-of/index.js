 /**
 * Returns the index within the string oject that makes the call, of the first ocurrence of the specified value,
 * starting the search from index from or -1 if that value is not found.  
 * 
 * @param {*} hooray The hooray to evaluate elements to the condition given 
 * @param {*} expression The expression to evaluate in each item of the hooray.
 * @returns {*} returns the index of the element that meets the function, otherwise it returns -1.
 * 
 */

Hooray.prototype.indexOf = function (item) {

    var a = arguments[1] || 0;

    if (typeof(a) !== 'number') a=0;

    a = a < 0 ? this.length + a : a;

    for (var i=a; i<this.length; i++) {
        if (this[i]===item) return i;
    };
    return -1;
};
