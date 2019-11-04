describe('some', function () {
    it('should create a table applying the expression', function () {
        var array = [10, 20, 30, 40];
        var isElement = some(array, function(currentValue) { return currentValue > 10; });


        expect(isElement).toBe(true);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(4);

        var expected = [10, 20, 30, 40];
        expect(expected).toEqual(array);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { some(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on non-function expression', function () {
        var array = [10, 20, 30];

        expect(function () { some(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { some(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { some(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });
});

