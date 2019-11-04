/**
 * 
 * @param  {...any} args : arguments;
 * @throws {TypeError} when arr is not an array;
 * 
 * @returns {Array} array modified;
 */

Hooray.prototype.unshift = function (){

    var newArr = new Hooray(0);

    for (var i = 0; i < arguments.length; i++) {
      newArr[newArr.length++] = arguments[i];
    }
  
    for (var j = 0; j < this.length; j++) {
      newArr[newArr.length++] = this[j];
    }
  
    for (var k = 0; k < newArr.length; k++) {
      var element = newArr[k];
      this[k] = element;
    }
    this.length = newArr.length;
  
    return this.length;
  };
