// --------------------------REVERSE--------------------------------------
/**
 * 
 * @param {*} array The array to reverse sort elements to. 
 */
Hooray.prototype.reverse = function() { 	

    var arrayAux = [];
    var j = 0;
    for (var i = (this.length-1); i > -1; i--) {
        arrayAux[j] = this[i];       
        j += 1;
    }
    for (var x = 0; x < this.length; x++) {
        this[x] = arrayAux[x];       
    }

    return this;
};