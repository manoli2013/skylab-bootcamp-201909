/**
 * Modifies all the elements of an array from a start index 
 * (default zero) to an end index (default array length) with a static value.
 * 
 * @param {*} array origin array
 * @param {*} value static value
 * @param {*} begin start index 
 * @param {*} end  end index
 * 
 * 
 */
function fill(array, value, begin, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    if (begin > array.length) return;debugger;


    begin = begin || 0;
    if (begin < 0){
        begin = array.length + begin;
        if (begin < 0) begin = 0;
    };
    end = end || array.length;
    end = end < 0? array.length + end : end; 
       
    for (var i = begin; i < end; i++)
        array[i] = value;
};