describe('fill', function() {
 // Happy path
 it('should receive an array and an item and fill all elements of original array with that item', function() {
   
    var array = ['Pol', 'Jordi', 'Noa'];
    var item = 'a';
    var result = fill(array, item);
    var expected = ['a', 'a', 'a'];
    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
   
 })

 it('should receive an array with an item and first index  and fill items from first index until the end of array', function() {
  
   var array = ['Pol', 'jordi', 'Noa']
   var item = 'a';
   var indexIni = 1;
   var result = fill(array, item, indexIni);

   var expected = ['Pol', 'a', 'a'];

   expect(result).toEqual(expected);
   expect(result).toBeInstanceOf(Array);
   
 })

 it('should receive an array with an item, first index and final index, return original array with items modified from first to end index', function() {
   
    var array = ['Pol', 'jordi', 'Noa', 'Noli', 'Eli', 'Mari'];
    var item = 'a';
    var indexIni = 1;
    var indexEnd = 4;
    var result = fill(array, item, indexIni, indexEnd);

    var expected = ['Pol', 'a', 'a', 'a', 'Eli', 'Mari'];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);

 });

 //errors

 it('should fail on non-received array', function() {

   var array;
   expect(function() { fill(array)}).toThrowError('undefined is not an array'); 
   expect(function() { fill(true)}).toThrowError('true is not an array');
   expect(function() { fill(1)}).toThrowError('1 is not an array');

 });

 it('should fail on receiving a function as the item', function() {

  var array = ['Pol', 'jordi', 'Noa', 'Noli', 'Eli', 'Mari'];
  var item = function() {console.log('Testing')};
  

  expect(function() { fill(array, item )}).toThrowError('function should be a string or a number'); 
  
});

})