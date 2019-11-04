/**
 * Look for an element & returns the first index (if not found > return -1)
 * 
 * @param {array} The array to be searched with element
 * @param {element} element 
 * @param {index} number 
 */

    function indexOf(array, item , expression){
        if (!(array instanceof Array)) throw TypeError(array + " is not an array");
        if (!(array instanceof Array)) throw TypeError(null + " is not an array");

        for (var i = 0; i < array.length; i++){
            if (expression(array[i],item)){
                return i
            }
        }
        return -1
    }
        
    function findNumber(itemArray,item){
       return itemArray === item
    }
        