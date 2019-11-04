
function fill (array, item) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    var start = arguments[2] || 0;
    var end = arguments[3] || array.length;

    start = start < 0 ? array.length+start : start;
    end = end < 0 ? array.length+end : end;
    
    end = end > array.length ? array.length : end;
    
    for( var i=start; i<end; i++){
        array[i]=item;
    }
}