// --------------------------UNSHIFT--------------------------------------
/**
 * Insert in the start of hooray all the arguments
 * 
 * @param {*} array The array to unshift elements to.
 * @param {...any} item The item (or items) to unshift.
 * 
 * @returns {number} The new lenth of the array.
 */
Hooray.prototype.unshift = function() { 	
    
    var newArray = [];

    for (var i = 0; i < arguments.length; i++) {
        newArray[i] = arguments[i];
    }

    for (var j = 0; j < this.length; j++) {
        newArray[j+i] = this[j];
    }

    for (var x = 0; x < newArray.length; x++) {
        this[x] = newArray[x];
    }

    this.length = x;
    return this.length;
};