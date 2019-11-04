/**
 * Map method creates a new array with the results of the function 
 * callback applied to each one of its elements.
 * @param {Array} array The array where we will use map() method.
 * @param {Function} expression The expression that will produce elements for the new array.
 * @param {currentValue} array[i] The current element of the array that its being processed.
 * @param {index} i The current index inside the array.
 * @returns {result} result[i] Result is the new array composed by the elements created through the callback function.
 */

    function map(array, expression) {

      if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
      if (!(expression instanceof Function)) throw TypeError(fn + ' is not a function');

        var result = [];           
       
        for (var i = 0; i < array.length; i++)
       
          result[i] = expression(array[i]);
    
        return result;
     
       }
       