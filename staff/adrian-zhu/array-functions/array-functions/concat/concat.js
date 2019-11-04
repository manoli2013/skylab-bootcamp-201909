/**
 * 
 * @param {arr} arrays which are the arguments that we want to merge together;
 * 
 * @throws {throw} when arr is not an array;
 * @returns {aux} the new array that has merged value of selected arrays;
 */
function concat(arr) {

    if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')
    
    var aux = arr;
    var cont = arr.length;

     for (var i = 1; i < arguments.length; i++) {
         if(arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                aux[cont] = arguments[i][j];
                cont++;
            }

         } else { aux[cont] = arguments[i];
                    cont++;}
     }
     return aux;
}
