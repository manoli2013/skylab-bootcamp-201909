describe('concat', function () {
    it('should concatenate the array with array2 and return a result', function () {
        
        var array = [1, 2, 3];
        var array2 = [4,5,6];

        var result = concat(array,array2);

        expect(result).not.toBe(array);
        expect(result).not.toBe(array2);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(array.length + array2.length);
               
        var expected = [1,2,3,4,5,6];
        expect(result).toEqual(expected);
    });

    it('should concatenate the array with arguments and return a result', function () {
        var array = [1, 2, 3];

        var result = concat(array,4,5,'hola');
        expect(result).not.toBe(array);
        
        var expected = [1,2,3,4,5,'hola'];
        expect(result).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { concat(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on array as a string', function () {
        var array = 'Hello, world';

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail on array as a number', function () {
        var array = 25;

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail on array as a function', function () {
        var array = console.log('Hello world');

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});
