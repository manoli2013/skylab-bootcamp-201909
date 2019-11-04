/**
 * 
 * @param {*} begin 
 * @param {*} end 
 * 
 * @throws {TypeError} throw TypeError
 */


Hooray.prototype.slice = function ( startIndex = 0, endIndex = this.length) {

	!startIndex ? startIndex = 0 : {};
	!endIndex ? endIndex = this.length: {}; 

    var result = [];
   
    for (let index = startIndex; index < endIndex; index ++) {
      var value = this[index];
   
      if (index < this.length) {
        result = value;
      }
    }
   
	return result;
	
}
