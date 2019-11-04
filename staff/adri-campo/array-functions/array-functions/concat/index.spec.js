describe('concat', function () {
    it('should concatenate the array with array1 and return a concatenated', function () {
        var array = [1, 2, 3];
        var array1 = [4,5,6];

        var concatenated = concat(array,array1);

        expect(concatenated).not.toBe(array);
        expect(concatenated).not.toBe(array1);
        expect(concatenated).toBeInstanceOf(Array);
        expect(concatenated.length).toBe(array.length + array1.length);
               
        var expected = [1,2,3,4,5,6];
        expect(concatenated).toEqual(expected);
    });

    it('should concatenate the array with arguments and return a concatenated', function () {
        var array = [1, 2, 3];

        var concatenated = concat(array,4,5,'hola');
        expect(concatenated).not.toBe(array);
        
        var expected = [1,2,3,4,5,'hola'];
        expect(concatenated).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { concat(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail in the array because it has been defined as a string', function () {
        var array = 'd';

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a number', function () {
        var array = 1;

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a function', function () {
        var array = console.log();

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});
