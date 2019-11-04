/**
 * FIND. 
 * @param {Array} paramArray first array with the items where to search. 
 * @param {Function} expresion with the items we want to find. 
 */
function find(array, expression){
   if (!(array instanceof Array)) throw TypeError (auxArray + ' is not array');
   if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
  
   
   for(var i=0; i<array.length;i++){
      if (expression(array[i])) {
         return array[i];
      }
   }   
   return undefined;
}