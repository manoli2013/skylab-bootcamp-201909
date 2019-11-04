function find (array, expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    if (array.length === 0 ) return undefined;

    for (i=0; i<array.length; i++) {
        if (expression(array[i])) return array [i];
    }
    return undefined;
}