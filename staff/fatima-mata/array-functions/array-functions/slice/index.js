/**
 * 
 * Returns a shallow copy of a portion of an array into a new array object selected from begin to b (b not included) where begin and b represent
 * the index of items in that array. The original array will not be modified
 * 
 * @param {*[]}  
 * @param {*} 
 * @param {*}  
 * @returns {*} 
 * 
 */

function slice(array, a, b) {

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
    if (!(typeof a === 'number') && !(a === undefined)) throw TypeError("expected expression, got ,");
    if (!(typeof b === 'number' || b === undefined)) throw TypeError("expected expression, got ,");

    var c = [];
    for (var i = (a || 0); i < (b || array.length); i++) {
        if (i >= (a || 0) && i < (b || array.length))
            c[c.length] = array[i];
    };
    return c;
};