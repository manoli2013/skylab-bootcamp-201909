function shuffle(array) {
  if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

  var result = [];

  for (var i = 0; i < array.length; i++) result[i] = array[i];
  for (var i = 0; i < result.length; i++) {
    var random = Math.floor(Math.random() * result.length); // 0 <> length-1

    var value = result[i];
    result[i] = result[random];
    result[random] = value;
  };
  return result;
};

/*
// another version

function shuffle(array) {
  let newArray = [];
  let copyArray = [];

  for(let i = 0; i < array.length; i++) {
    copyArray[i] = array[i];
  };
  //let copyArray = [...array] // en ES6 usamos spread operator, en ES5 usamos for loop

  for(let i = 0; i < array.length; i++)  {
    let randomIndex = Math.floor(Math.random() * copyArray.length)
    newArray[i] = copyArray[randomIndex]
    copyArray.splice(randomIndex, 1)
  };
  return newArray;
};
*/