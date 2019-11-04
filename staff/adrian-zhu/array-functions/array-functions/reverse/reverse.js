/**
 * 
 * @param {Array} arr: correspond array of the operation
 * @throws {TypeError} arr is not array
 * @returns {Array} same arr with the first array element becomes the last, and the last array element becomes the first. 
 */


function reverse(arr) {

  if(!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

  var firstIndex = 0;
  var endIndex = arr.length - 1; 

    if(endIndex > firstIndex){
      for(var i = 0; i < endIndex; i ++)
        {var temp = arr[firstIndex];
        arr[firstIndex] = arr[endIndex];
        arr[endIndex] = temp;
        firstIndex++;
        endIndex--;
        }
    }
  return arr;
};


