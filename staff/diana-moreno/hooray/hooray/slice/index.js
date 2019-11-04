/**
 * Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
 * @param  {Array} array     Base array
 * @param  {Number} indexIni Initial index to select the portion of the array
 * @param  {Number} indexEnd End index to select the portion of the array
 * @return {Array}           A copy of the portion of the array
 */
Hooray.prototype.slice = function(indexIni, indexEnd) {
  var newArray = [];
  counter = 0;

  indexIni = indexIni || 0;
  indexIni = indexIni < 0 ? this.length + indexIni : indexIni;
  indexEnd = indexEnd || this.length;
  indexEnd = indexEnd < 0 ? this.length + indexEnd : indexEnd;

  for (var i = indexIni; i < indexEnd; i++) {
    newArray[counter++] = this[i];
    //counter++;// no hace falta declarar counter
  }
  return newArray;
};
