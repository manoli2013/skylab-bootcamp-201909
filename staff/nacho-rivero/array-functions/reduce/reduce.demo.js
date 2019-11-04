console.log('DEMO: reduce')


console.log('Example 1 (Multiply numeric array without initial value)');
var array = [1, 2, 3, 4];
console.log('Array: ' + array);

var result = reduce(array, function(accumulator, value) {
    return accumulator * value;
});
console.log('Result: ' + result);

console.log('Sum numeric array with initial value');
var array = [ 4, 8, 15, 16, 23, 42];
console.log('Array: ' + array);

var result = reduce(array, function(accumulator, value) {
    return accumulator + value;
}, 2);
console.log('Result: ' + result);


console.log('Sum string array (concatenate)');
var array = [ 4, 8, 15, 16, 23, 42];
console.log('Array: ' + array);

var result = reduce(array, function(accumulator, value) {
    return accumulator + value;
});
console.log('Result: ' + result);