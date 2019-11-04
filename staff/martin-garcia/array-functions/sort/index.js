/**
 * 
 * @param {*} array 
 * @param {*} expression 
 */
function sort(array, expression) {
    if (!(array instanceof Array)) throw TypeError(array + " is not an Array");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a Function");

    if (expression !== undefined && expression(1, 1) === 0) {
        return descendentOrder(array);
    } else {
        return ascendentOrder(array);
    }
}


function descendentOrder(array) {
    var aux;
    for (var a = 0; a < array.length; a++) {
        for (var b = 0; b < array.length; b++) {
            if (array[b] < array[a]) {
                aux = array[b];
                array[b] = array[a];
                array[a] = aux;
            }
        }
    }
    return array;
}



function ascendentOrder(array) {
    var aux;
    for (var a = 0; a < array.length; a++) {
        for (var b = 0; b < array.length; b++) {
            if (array[b] > array[a]) {
                aux = array[b];
                array[b] = array[a];
                array[a] = aux;
            }
        }
    }
    return array;
}



/* 
console.log("DEMO sort");


var array = [2, 10, 3, 4, 5];
console.log(sort(array));

var array = [2, 1, 3, 4, 5];
console.log(sort(array, function(a, b) { return a - b }));

var array = [2, 3, 4, 5];
console.log(sort(array, (a, b) => a + b)); */