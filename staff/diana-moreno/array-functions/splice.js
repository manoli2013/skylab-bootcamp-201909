/**
 * changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * @param  {Array} array The array to modify
 * @param  {Number} indexIni Optional: index to start to cut
* @param  {Number} deleteCount Optional:
    An integer indicating the number of elements in the array to remove from start.
    If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
    If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
* @param      {...any} items Optional:
    The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.
* @return {Array}       the deleted elements of the array
* @throws {TypeError}    If array is not an array
 */
function splice(array) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  if (array.length === 0) return [];

  var array = arguments[0];
  var indexIni = arguments[1];
  var deleteCount = arguments[2] || arguments[2] === 0 ? arguments[2] : array.length - indexIni;
  if (deleteCount > array.length) deleteCount = array.length - indexIni;
  var items = [];

  if (arguments[3]) {
    for (let i = 3; i < arguments.length; i++)
      items[i - 3] = arguments[i];
  };
  var newArray = [];
  var deleted = [];

  for (var i = 0; i < indexIni; i++) {
    newArray[i] = array[i];
  };
  for (let i = 0; i < items.length; i++) {
    newArray[newArray.length] = items[i];
  };
  var counter = 0;
  for (var i = indexIni; i < indexIni + deleteCount; i++) {
    deleted[counter++] = array[i];
  }
  for (var i = indexIni + deleteCount; i < array.length; i++) {
    newArray[newArray.length] = array[i];
  };

  // modify the original array
  // add the new elements
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  };
  // delete the last elements
  for (let i = newArray.length; i < array.length; i++) {
    delete array[i];
  };
  array.length = newArray.length;
  return deleted;
};

// the negative cases are missing