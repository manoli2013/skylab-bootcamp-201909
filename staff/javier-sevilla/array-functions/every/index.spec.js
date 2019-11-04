describe('every', function () {
    it('should create a table applying the expression', function () {
        var array = [1,2,3,7];
        var boleano = every(array, function(currentValue) { return currentValue < 8; });


        expect(boleano).toBe(true);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(4);

        var expected = [1,2,3,7];
        expect(expected).toEqual(array);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { every(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { every(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { every(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { every(array, true); }).toThrowError('true is not a function');
        expect(function() { every(array, 1); }).toThrowError('1 is not a function');
    });
});

