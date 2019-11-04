/**
 * FILTER.
 * Create a new hooray with the elements that pass the condition. 
 * 
 * @param {Hooray} hooray we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {Hooray} the new hooray with the condition applied. 
 * */

Hooray.prototype.filter = function (expression) {

    if (!(this instanceof Hooray)) throw TypeError(this + ' is not a hooray');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var newHooray = new Hooray;
        for (i = 0; i < this.length; i++) {
        if(expression(this[i])) {
        newHooray[newHooray.length] = this[i];
        newHooray.length++;
        }
    }
    return newHooray;
}