/**
 * 
 * @param {*} array 
 * @param {*} val 
 * @param {*} init 
 * @param {*} end 
 */
function fill(array, val, init, end){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var endParam = end ? end : array.length;
    var startParam = init ? init : 0; 

    for (let i = 0; i < array.length; i++) {
        if(i >= startParam && i<=endParam){
            array[i] = val;
        }
    }
    return array;
}