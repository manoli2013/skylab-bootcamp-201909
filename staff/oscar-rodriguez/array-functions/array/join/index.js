/**
 * Converts an Array into a String.
 * 
 * @param {Array} array Array that we will convert to String.
 * @param {String} separator Separator between each element. 
 *                           If an separator is omited, as default separator is a coma.
 */
function join (array) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    
    var separator = arguments.length>1 ? arguments[1] : ",";
    var string='';

    for (var i=0; i<array.length; i++) {
        string+=array[i];
        if (i<array.length-1) string+=separator;
    }
    return string;
}