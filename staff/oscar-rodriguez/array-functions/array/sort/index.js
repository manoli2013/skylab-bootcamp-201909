function sort (array) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    var sorted = false;
    var aux;

    var expression = arguments.length > 1 ? arguments [1] : (function (a,b) { return b < a ? 1 : -1 });
    if (!(expression instanceof Function)) throw TypeError (expression + ' is not a function');
    while (!sorted) {
        sorted = true;
        for (var i=0; i<array.length-1; i++){
            
            if ((expression(array[i].toString().charCodeAt(0),array[i+1].toString().charCodeAt(0))>0)) {
                aux = array[i+1];
                array[i+1] = array[i];
                array[i] = aux;
                sorted = false;
            }
        }
    }
}