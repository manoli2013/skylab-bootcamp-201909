/**
 * 
 * @param {Array} arr: the array that you want to operate;
 * @param {value} val : the value you want to insert;
 * @param {number} startIndex : index where you want to begin;
 * @param {number} endPosition : index where you want to end;
 * 
 * @throws {TypeError}: when arr is not array;
 * @throws {Error} maxim arguments that you can set;  
 * 
 * @return {Array} same array
 */

function fill(arr, val, startIndex, endPosition){

  if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');

  if (arguments.length > 4) throw Error('only with 4 arguments');

  !startIndex ? startIndex = 0 : {};
  !endPosition ? endPosition = arr.length: {}; // vacio


  for (var i = startIndex; i < endPosition; i += 1){
    arr[i] = val;
  }

  return arr;
}

