
/**
 * Concatenate all the elements into one single array.  
 * 
 * @param {Array} array the initial array.
 * 
 * @returns {array} array with the diferent arrays or elements concatenated.
 * */



function concat(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');

    var newArray = []; 

    var iterat = 0;
    for (var y = 0; y < arguments[0].length; y++){
        newArray[iterat] = arguments[0][y];
        iterat += 1;
    }

    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                newArray[iterat] =  arguments[i][j];  
                iterat += 1;
            }           
        } else {
            newArray[iterat] = arguments[i];
            iterat += 1;
        } 
    }       
    return newArray;
    
}


  