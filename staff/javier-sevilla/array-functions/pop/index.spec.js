describe('pop', function () {
    it('should remove the first element of an array and return the value of first element', function () {
        var array = [1, 2, 3];

        var lastElement = pop(array);

        expect(lastElement).toBe(3);
        expect(array.length).toBe(2);
               
        var expected = [1,2];
        expect(array).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { pop(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail in the array because it has been defined as a string', function () {
        var array = 'd';

        expect(function() { pop(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a number', function () {
        var array = 1;

        expect(function() { pop(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a function', function () {
        var array = console.log();

        expect(function() { pop(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});