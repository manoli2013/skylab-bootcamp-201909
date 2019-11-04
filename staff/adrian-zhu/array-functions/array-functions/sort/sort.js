
/**
 * 
 * @param {Array} arr 
 * @throws {TypeError} Error
 * 
 * @returns {Array} reorganized array;
 */


function sort(arr){

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

        for (var i = 0; i < arr.length; i++) {
            for (var j = i+1; j < arr.length; j++) {
                if(arr[i] > arr[j]){
                    var c = arr[i];
                    arr[i] = arr[j];
                    arr[j] = c;
                }
            }
        }
        return arr;
    };