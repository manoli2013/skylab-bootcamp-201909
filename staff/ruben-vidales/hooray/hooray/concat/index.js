/**
 * Concat every hoorays recibed by paramentes and returns the new one
 * 
 * @returns The array that concatenates every hooray
 */
Hooray.prototype.concat = function () {
    var aux = new Hooray();

    for (var i = 0; i < this.length; i++) {
        aux[i] = this[i];
        aux.length++;
    }

    var cont = this.length;

    for (var i = 0; i < arguments.length; i++) {

        for (var j = 0; j < arguments[i].length; j++) {
            aux[cont] = arguments[i][j];
            aux.length++;
            cont++;
        }
    }
    return aux;
}
