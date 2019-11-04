function indexOf (array, item) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    
    var start = arguments[2] || 0;
    var end = arguments[3] || array.length;

    start = start < 0 ? array.length+start : start;

    if (typeof(start) !== 'number') start = 0;

    for (i=start; i<array.length; i++) {
        if (array[i]===item) return i;
    }
    return -1;
}