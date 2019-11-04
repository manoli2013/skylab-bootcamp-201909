/**
 * 
 * @param {*} expression 
 * 
 * @throws {TypeError} if arr is not array
 * @throws {TypeError} if expression is not function
 * 
 * @returns {index} return the index of the first element in the array that satisfies the provided testing function. 
 */


Hooray.prototype.findIndex = function (expression) {

    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    for( var i = 0; i < arr.length; i++){
      var x = arr[i];
      if (expression(x)) return(i);
  }
}; 