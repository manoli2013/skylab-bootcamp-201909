/**
 * 
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the first
 * 
 * @param {*[]} arr Array to modify
 *  */
function reverse(arr) {

    if (!(arr instanceof Array)) throw TypeError(arr + " is not an Array");
    var index = arr.length - 1;
    var arrAux = [];

    for (var a = 0; a < arr.length; a++) {
        arrAux[a] = arr[a];
    }

    for (var a = 0; a < arr.length; a++) {
        arr[a] = arrAux[index];
        index--;
    }
}