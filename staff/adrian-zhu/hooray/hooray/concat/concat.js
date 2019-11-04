/**
 * @returns {Array}: concated arrays;
 * 
 */

Hooray.prototype.concat = function() {

    var aux = new Hooray();
     
     for (var i=0; i<this.length; i++) {
         aux[i]=this[i];
     }
 
     aux.length = this.length;
 
     for (var i = 0; i < arguments.length; i++) {
         for (var j = 0; j < arguments[i].length; j++) {
             aux[aux.length++] = arguments[i][j];
         }
     };
     
     return aux;
 }