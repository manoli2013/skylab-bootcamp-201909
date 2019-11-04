function findIndex (array, expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    if (array.length === 0 ) return -1;

    for (i=0; i<array.length; i++) {
        if (expression(array[i])) return i;
    }
    return -1;
}

find([],function (i) {return (i<10)});