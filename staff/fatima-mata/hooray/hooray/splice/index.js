/**
 * 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} count 
 * @throws {*} when arr is not array;
 * @throws {*} maxim arguments that you can set;  
 * @return {*} spliced array
 * 
 */

Hooray.prototype.splice = function (start, count) {

    if (arguments.length > 2) throw Error('only with 2 arguments');

    var spliced = new Hooray, before = new Hooray, count;
  
    for (var i = 0; i < this.length; i++){ before[i] = this[i];
    ++before.length }
    for (var j = 0; j < start-1 ; j++){
      this[j] = before[j]
    };
    for (var k = 0; k < (before.length - count -1) ; k++){
      this[start+k] = before[start+count+k]
    };
    for (var z = 0; z < count; z++){        
      spliced[spliced.length++] = before[start+z];
    };
    return spliced;
};