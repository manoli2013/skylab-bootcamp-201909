console.log("DEMO: slice");

var array = ['azathoth', 'yog-sothoth', 'nyarlathotep', 'shub-niggurath', 'hastur', 'dagon'];
console.log("array", array);

console.log("slice");
result = slice(array, 1, 3);
console.log(result);
console.log(array);

console.log("slice");
result = slice(array, 2);
console.log(result);
console.log(array);

console.log("slice");
result = slice(array, -3);
console.log(result);
console.log(array);