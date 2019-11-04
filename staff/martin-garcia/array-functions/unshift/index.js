/**
 * 
 * Should concat the array with new elements in the first positions of the initial array
 * 
 * @param {*[]} initial Initial array 
 * @param {*[]} addArr  Array to concat at the begining of initial array
 */
function unshift(initial, addArr) {

    if (!(initial instanceof Array)) throw TypeError(initial + ' is not an Array');
    if (!(addArr instanceof Array)) throw TypeError(addArr + ' is not an Array');


    var index = initial.length - 1;
    initial.length += addArr.length;
    var validacion = true;
    for (var i = initial.length - 1; i >= 0; i--) {
        if (validacion) {
            initial[i] = initial[index];
            index--;
            if (index === -1) {
                validacion = false;
                index = addArr.length - 1;
            }
        } else {
            initial[i] = addArr[index];
            index--;
        }
    }
    return initial.length;
}