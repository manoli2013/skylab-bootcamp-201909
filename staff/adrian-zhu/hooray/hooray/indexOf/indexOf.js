/** 
* @param {value} value
* @param {start} start: number of index
*
* @throws {error} if arr is not array
* @throws {TypeError} if expression is not function
*
* @returns {number} the index of the first ocurrence or -1 if not found 
**/

Hooray.prototype.indexOf = function(value, startIndex){

    if (arguments.length > 3) throw Error('too many arguments');

   !startIndex ? startIndex = 0 : parseInt(startIndex);
 
    for (var i = startIndex; i < this.length; i++) {
    if (this[i] === value) return i;
   }

   return -1;
 }