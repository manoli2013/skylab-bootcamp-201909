/**
 * Find arguments value in array and if exists return true if not return false
 * 
 * @param {*} array The array to concatenate elements to newArray
 * @returns newArray contains: array + arguments.
 * 
 */
function includes(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var finded = true; 
    var continua = true;
    for (var i = 1; i < arguments.length && finded; i++) {
        continua = true;
        for (var j = 0; j < array.length&&continua; j++) {
            if (arguments[i]===array[j]) {
               continua = false               
            }              
        } 
        if (continua) finded=false;     
    }       
    return finded;
    
}