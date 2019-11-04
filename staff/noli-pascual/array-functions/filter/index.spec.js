describe('filter', function () {
    it('should succeed on correct array and expression, filtering items that accomplish condition and pushing them in a new array', function () {
        
        var array = [1, 'Hola, mundo', 5, 7];
        var result = [];
        
        var isString = function (item) { return typeof item === 'string'; };

        result = filter(array, isString);

        var expected = ['Hola, mundo'];

        expect(result).toEqual(expected);
        expect(isString).toBeInstanceOf(Function);

    });

    it('should fail on non-function expression', function () {

        var array = [1, 'Hola, mundo', 5, 7];

        expect(function () { filter(array); }).toThrowError('undefined is not a function');
        expect(function() { filter(array, true); }).toThrowError('true is not a function');
        expect(function() { filter(array, 1); }).toThrowError('1 is not a function');
    });

    it('should fail on undefined array', function () {
        var array; //[1, 'Hola, mundo', 5, 7];

        var isString = function (item) { return typeof item === 'string'; };

        expect(function() { filter(array, isString); }).toThrowError(TypeError,'undefined is not an array');
    });

});

