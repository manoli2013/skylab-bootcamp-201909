/**
 * Add an element in the beggining of the hooray
 * 
 * @param {*} arguments The elements to put in the hooray
 * 
 * @returns {number} The new length of the hooray
 */
Hooray.prototype.unshift = function () {
    var aux = new Hooray();
    for(var c = 0; c < this.length; c++){
        aux[c] = this[c];
        aux.length++;
    }
    var cont = 0;
    for(var i = 0; i<arguments.length ;i++){
        this[cont] = arguments[i];
        cont++;
        this.length++;
    }
    for(var j = 0; j<aux.length; j++ ){
        this[cont] = aux[j];
        cont++;
    }
    return this.length;
}