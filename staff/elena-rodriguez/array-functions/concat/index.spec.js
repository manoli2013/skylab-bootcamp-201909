console.log('DEMO concat');

var array = [1,2,3,4];
var string = 'hola';
console.log('should return an array with the initial array and a string');
console.log(concat(array, string));


var array = [1,2,3,4];
var string = 'hola';
var number = 45; 
console.log('should return an array with the initial array, a string and a number');
console.log(concat(array, string, number));



describe('concat', function () {
    it('should concatenate the first array with the second one and return a new one with all elements concatenated', function () {
        var initialArray = [1, 2, 3];
        var secondArray= [4,5,6];

        var result = concat(initialArray,secondArray);

        expect(result).not.toBe(initialArray);
        expect(result).not.toBe(secondArray);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(initialArray.length + secondArray.length);
               
        var expected = [1,2,3,4,5,6];
        expect(result).toEqual(expected);
    });

    it('should succeed on concatenate the array with any other different elements', function () {
        var firstArray = [1, 2, 3];

        var result = concat(firstArray,4,5,'hola');
        expect(result).not.toBe(firstArray);
        
        var expected = [1,2,3,4,5,'hola'];
        expect(result).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { concat(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail if the initial element given is a string', function () {
        var array = 'Actually, im a string';

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail if the initial element given is a number', function () {
        var array = 1;

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail if the initial element is a function instead of an array', function () {
        var array = console.log();

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});


