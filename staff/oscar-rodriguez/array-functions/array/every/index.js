function every (array, expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    for (i=0; i<array.length; i++) {
        if (!(expression(array[i]))) return false;
    }
    return true;
}