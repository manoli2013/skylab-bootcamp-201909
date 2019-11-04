Hooray.prototype.reverse = function() {

    var firstIndex = 0;
    var endIndex = this.length - 1; 
  
      if(endIndex > firstIndex){
        for(var i = 0; i < endIndex; i ++)
          {var temp = this[firstIndex];
          this[firstIndex] = this[endIndex];
          this[endIndex] = temp;
          firstIndex++;
          endIndex--;
          }
      }

    return this;
};
