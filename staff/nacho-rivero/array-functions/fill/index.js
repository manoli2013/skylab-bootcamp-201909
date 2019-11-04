/**
 * Modifies the array from the start index (default zero) to an end index (default array length). Returns the modified array
 * @param {*} array The array to modificate.
 * @param {*} value The value to introduce in the array.
 * @param {*} start The index in the array to start the introduction of the value.
 * @param {*} end The last index to introduce the value.
 */

function fill(array, value, start, end) {

    if(!(array instanceof Array)) throw TypeError (array +' is not an array');
    if(!(array instanceof Function)) throw TypeError (array + ' is not a function');
    if(!(start > end)) throw TypeError (start + 'cant be bigger than end');

    if (i < start){
       
        for (i = start; i<end; i++){
            array[i]=value;
        }

        return  array;
        
    } 

    else if (0 > start){

        for (j=start+array.length; j<end; j++){ //  
            array[j]=value;
        }

        return  array;

    } else if (0 > end){

        for (j=start; j<end+array.length; j++){ //  
            array[j]=value;
        }

        return array;

    }else{

        for (var j=0; j<array.length-1; j++){
            array[j]=value;
        }
            return  array;
            }
}