/**
 * The fill() method fills (modifies) all the elements of an array from a
 * start index (default zero) to an end index (default array length) with a static value.
 * It returns the modified array.
 * 
 * @param {Array} array
 * @param {*} 
 * @param {...number} number that specifies the start index
 * @param {...number} number that especifies the end index
 * 
 * @returns {Array} the resulting array with elements replaced.
 * 
 * @throws error if first parameter is not an array.
 * @throws error if second parameter is not a function.
 */

function fill(array, item, indexIni, indexEnd) {

    if(!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if(item instanceof Function) throw TypeError(typeof item + ' should be a string or a number')
    
    if(!indexEnd) indexEnd = array.length - 1;
    
    else if(indexEnd) indexEnd = indexEnd -1;
    
    if(!item) item = undefined;
    
    if(!indexIni) indexIni = 0;

    for(var i = indexIni; i <= indexEnd; i++) {
      array[i] = item;
    }
    return array;
}

