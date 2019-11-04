/** 
* @param {Array} arr 
* @param {value} value
* @param {start} start: number of index
*
* @throws {error} if arr is not array
* @throws {TypeError} if expression is not function
*
* @returns {number} the index of the first ocurrence or -1 if not found 
**/

function indexOf(arr, value, startIndex){
   if (arguments.length > 3) throw Error('too many arguments');
   if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');

  !startIndex ? startIndex = 0 : parseInt(startIndex);

   for (var i = startIndex; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

