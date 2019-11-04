/**
 * 
 * 
 * @param {*} val 

 * 
 * @throws {TypeError} if arr is not array
 * 
 * @returns {boolean} return true if element is include in the
 */

Hooray.prototype.includes = function(val){
    
    if(val === undefined || null){return false}
    else{
    for(var i=0; i<this.length; i++){if(this[i] === val) return true;}
    return false}
};