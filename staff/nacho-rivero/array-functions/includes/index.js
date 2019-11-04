/**
 * Method determines if the element it is included in the array or not. Returns a boolean.
 * @param {*} array The array given.
 * @param {*} value The element to find in the array.
 */


function includes(array, value){
    
    var found = false;
    
    for(i=0; i<array.length; i++){
      
        if(array[i] == value){
            found = true;
        } 
    }
    return found;
}