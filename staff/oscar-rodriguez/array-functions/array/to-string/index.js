/**
 * Converts an Array into a String.
 * 
 * @param {Array} array Array that we will convert to String.
 */
function toString (array) {
    var string='';
    
    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    for (var i=0; i<array.length; i++) {
        string+=array[i];
        if (i<array.length-1) string+=',';
    }
    return string;
}