/**
 * Fill the array to iterate with the item that you sent
 * 
 * @param {Array} array The array to iterate.
 * @param {*} newItem Character by which we will replace items from array
 * 
 */

function fill(array,newItem){

  if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
  
  var a = 0;
  var b = array.length;
  switch(arguments.length){
    case 3:
      a = arguments[2];
      break;
    case 4:
      a = arguments[2];
      b = arguments[3];
      break;
    default:
        if (arguments.length < 2 ) newItem = undefined;
      break;
  }
  
  for(var i = a; i < b; i++){
      array[i] = newItem;
    }  
}

