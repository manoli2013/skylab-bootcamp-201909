/**
 * 
 * 
 * @param {*} arr 
 * @param {*} val 
 * 
 * @throws {TypeError} if arr is not array
 * 
 * @returns {boolean} return true if element is include in the
 */

function includes(arr, val){
    
    if(!(arr instanceof Array)) throw TypeError(arr + ' is not an array');

    if(val === undefined || null){return false}
    else{
    for(var i=0; i<arr.length; i++){if(arr[i] === val) return true;}
    return false}
};