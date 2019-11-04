/**
 * 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} count 
 * 
 * @throws {TypeError}: when arr is not array;
 * @throws {Error} maxim arguments that you can set;  
 * 
 * @return {Array} spliced array
 */



function splice(arr, start, count) {

  if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');
  if (arguments.length > 3) throw Error('only with 3 arguments');

  var spliced = [], original = [], count;

  for (var i = 0; i < arr.length; i++) original[i] = arr[i];
  arr.length = arr.length - (count)

  for (var j = 0; j < start-1 ; j++){
    arr[j] = original[j]
  }
  for (var k = 0; k < (original.length - count -1) ; k++){
    arr[start+k] = original[start+count+k]
  }

  for (var z = 0; z < count; z++){
    spliced[z] = original[start+z];
  }
  return spliced
}