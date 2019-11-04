/**
 * 
 * Reverses an array in place. The first array element becomes the last, and the last array element becomes the first
 * 
 * @param {*[]} arr Array to modify
 *  */
Hooray.prototype.reverse = function() {

    var index = this.length - 1;
    var auxHooray = new Hooray();

    for (var a = 0; a < this.length; a++) {
        auxHooray[a] = this[a];
        auxHooray[auxHooray.length++]
    }

    for (var a = 0; a < this.length; a++) {
        this[a] = auxHooray[index];
        index--;
    }
}

var a = [1, 2, 3];
a.reverse();
console.log(a);