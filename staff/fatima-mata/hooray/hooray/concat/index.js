/**
 * Concat every hoorays recibed by paramentes and returns the new one
 * 
 * @returns The array that concatenates every hooray
 */

Hooray.prototype.concat = function () {
    
    var a = new Hooray();

    for (var i = 0; i < this.length; i++) {
        a[i] = this[i];
        a.length++;
    }

    var b = this.length;

    for (var i = 0; i < arguments.length; i++) {

        for (var j = 0; j < arguments[i].length; j++) {
            a[b] = arguments[i][j];
            a.length++;
            b++;
        }
    }
    return a;
}
