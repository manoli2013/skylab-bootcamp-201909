function includes (array, item) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    for (i=0; i<array.length; i++) {
        if (array[i]===item)  return true
    }
    return false;
}

includes ([1,2,3,4],2);