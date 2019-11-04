/**
 * returns a  copy of a portion of an array into a 
 * new array object selected from begin to end
 * 
 * @param {*} array origin array
 * @param {*} begin start index 
 * @param {*} end  end index
 * 
 * 
 * 
 */
function slice(array, begin, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');
    
    var result = []; // {}; // WTF?

    if (begin > array.length) return result;

    begin = begin || 0;
    if (begin < 0){
        begin = array.length + begin;
        if (begin < 0) begin = 0;
    };
    end = end || array.length;
    end = end < 0? array.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = array[i];

    //result.length = end - begin; // WTF?
    
    return result;
};