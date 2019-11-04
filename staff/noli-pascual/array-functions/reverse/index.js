/**
 * 
 * @param {Array} array to change
 * @returns {Array} same array with reversed order. 
 */


function reverse(arr) {

    if(!(arr instanceof Array)) throw TypeError (arr + ' is not an array')
  
    var firstIndex = 0;
    var endIndex = arr.length - 1; 
  
      if(endIndex > firstIndex){

        for(var i = 0; i < endIndex; i ++) {

            var temp = arr[firstIndex];
            arr[firstIndex] = arr[endIndex];
            arr[endIndex] = temp;

            firstIndex++;
            endIndex--;
        }
         
      }
    return arr;
};
  