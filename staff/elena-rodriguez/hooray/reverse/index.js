/**
 * REVERSE.
 * Reverse the order of the elements of a hooray. 
 * @param {hooray} Hooray that contains the initial elements.
 * @return {hooray} Hooray with the values in order inverted. 
 * 
 */

Hooray.prototype.reverse = function () {
     
    var ini=0;
    var fin=this.length-1;
    var item;
    
    while (ini<fin) {
        item=this[fin];
        this[fin]=this[ini];
        this[ini]=item;
        
        ini++;
        fin--;
    }
}