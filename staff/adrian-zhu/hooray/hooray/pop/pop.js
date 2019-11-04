Hooray.prototype.pop = function(){
    
    var lastItem = this[this.length - 1];
    this.length = this.length -1;
    return lastItem;

}