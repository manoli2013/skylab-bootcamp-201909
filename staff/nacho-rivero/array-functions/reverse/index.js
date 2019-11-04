/**
 * Method to reverse the array. It returns the array modified. The last input becomes the first.
 * @param {array} array The array to reverse its numbers.
 */

function reverse(array) {

    if(!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var rarray = [];

    for (var i = 0; i < array.length; i++) {
        
        rarray[i] = array[array.length - 1 - i];
        
        for(var j = 0; j < rarray.length; j++){
            array[i] = rarray[j];
        }
    }
    return array;
  }