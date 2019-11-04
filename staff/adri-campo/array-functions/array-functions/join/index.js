/**
 * It shows you all the items merged using a string value that is given at the beginning.
 * If no value is given, then the function gives you ",".
 * 
 * @param {Array} array 
 * @param {String} String value you give to merge the items
 */


/* añadir un item
 si no se define item pon "," 
 definir una variable donde ir metiendo el resultado
 recorrer array entera y tenemos 2 opciones: 
 1) añadir el array[i] + el item que hemos dicho 
 2) añadir el array[i] cuando el array length sea el total - 1
 CUANDO TERMINE DE RECORRER LA ARRAY (fuera del for) sacamos la variable resultado
 */

function join(array, item) {
    if(item === undefined) item = ",";
    var result = "";
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            result += array[i];
        else
            result += array[i] + item;
    }
    return result;
 }

 

//  var arrayNumbers = [1,2,3,4,5];
//  join(arrayNumbers, '---');
 

