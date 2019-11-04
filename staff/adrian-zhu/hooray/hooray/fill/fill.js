/**
 * 
 * @param {value} val : the value you want to insert;
 * @param {number} startIndex : index where you want to begin;
 * @param {number} endPosition : index where you want to end;
 * 
 * @throws {TypeError}: when arr is not array;
 * @throws {Error} maxim arguments that you can set;  
 * 
 * @return {Array} same array
 */


Hooray.prototype.fill = function(val, startIndex, endPosition) {
    

    if (arguments.length > 3) throw Error('only with 4 arguments');


    !startIndex ? startIndex = 0 : {};
    !endPosition ? endPosition = this.length: {}; 
  
    for (var i = startIndex; i < endPosition; i += 1){
    this[i] = val;
    }
  
    return this;
}