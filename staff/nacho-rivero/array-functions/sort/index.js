/**
 * Sort the elements of the array and returns the sorted array.
 * @param {*} array array to be sorted.
 */

function sort(array){

  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    var temp = []; 

    for (var i = 1; i < array.length; i++) {

      for (var j = 0; i < array.length - i; j++){

        if(array[j] > array[j]){

          temp = array[i];

          array[i] = array [j];

          array[j] = temp;

        }

       }

      }
    return array;
    }
  
    
