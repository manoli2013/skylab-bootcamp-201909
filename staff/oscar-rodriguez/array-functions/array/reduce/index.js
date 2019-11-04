function reduce (array, expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    if (array.length === 0) throw TypeError ("Reduce of empty array with no initial value at Array.reduce")
    var result=0;

    for (i=0; i<array.length; i++) {
        result=expression(result,array[i]);
    }
    return result;
}