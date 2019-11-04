function slice (array) {

    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    var start = arguments[1] || 0;
    var end = arguments[2] || array.length;

    start = start < 0 ? array.length+start : start;
    end = end < 0 ? array.length+end : end;

    var newArray = [];

    for (var i=start; i<end; i++) {
        newArray[newArray.length]=array[i];
    }
    return newArray;
}