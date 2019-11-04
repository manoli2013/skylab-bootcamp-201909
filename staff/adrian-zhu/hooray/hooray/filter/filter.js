/**
 * 
 * @param {*} expression 
 * 
 * @throws {TypeError} if arr is not array
 * @throws {TypeError} if expression is not function
 * 
 * @returns {Array} new array filted
 */


Hooray.prototype.filter = function (expression) { 

    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var newArr = new Hooray;

        for (i = 0; i < this.length; i++) {
        if(expression(this[i])) {
        newArr[newArr.length] = this[i]
        newArr.length++
    }
}
    return newArr
}