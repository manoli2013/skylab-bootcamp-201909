/**
 * 
 * @param {*} arr : array;
 * @param  {...any} args : arguments;
 * @throws {TypeError} when arr is not an array;
 * 
 * @returns {Array} array modified;
 */

function unshift(arr, ...args){
    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

    var list = [];
    var newItems = [...args];

    for (var i = 0; i < newItems.length; i++){
        list[i] = newItems[i];
    };
    for (var j = 0; j < arr.length; j++){
        list[j+newItems.length] = arr[j];
    };

    return list 
};