/**
 * Is used to merge two or more arrays without modifying the original array.
 * @param  {Array}  One or more rrays to merge
 * @return {Array} New merged array
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
function concat() {
  if (!(arguments[0] instanceof Array)) throw TypeError(arguments[0] + ' is not an array');

  let newArray = [];

  for (let i in arguments) {
    if(!(arguments[i] instanceof Array)) {
      newArray[newArray.length] = arguments[i];
    } else {
      for(let j in arguments[i]) {
        newArray[newArray.length] = arguments[i][j];
      }
    }
  }
  return newArray;
};
