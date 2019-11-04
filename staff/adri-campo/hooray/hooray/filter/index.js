/**
 * Create a new array with all the elements that accomplish the condition of the function given.
 * 
 * @param {Function} expression we use to test the elements. 
 * @returns {Array} newArr with the items of the first array that accomplished the test.
 */

// function checkCondition (item){
//     return item < 25

// }

Hooray.prototype.filter = function (expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var newHooray = new Hooray;
    for (i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            newHooray[newHooray.length] = this[i];
            newHooray.length++
        }
    }
    return newHooray

};
