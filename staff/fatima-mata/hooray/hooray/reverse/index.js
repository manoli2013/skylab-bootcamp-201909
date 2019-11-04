/**
 * Turn the hooray in reverse order
 * 
 * @returns {Hooray} The same hooray turned
 * 
 */

Hooray.prototype.reverse = function () {
     
    var a=0;
    var b=this.length-1;
    var c;
    
    while (a<b) {
        c=this[b];
        this[b]=this[a];
        this[a]=c;
        a++;
        b--;
    };
};