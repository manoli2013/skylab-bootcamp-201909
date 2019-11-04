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