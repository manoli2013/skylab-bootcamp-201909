describe('filter', function () {
    it('should create a table applying the expression', function () {
        var array = [1,2,3,4,5,6,7,8];
        var expression = function(currentValue) { return currentValue < 5; }
        var result = filter(array, expression);


        expect(result).not.toBe(array);
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(4);
        expect(array.length).toBe(8);

        var expected = [1,2,3,4];
        expect(expected).toEqual(result);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { filter(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { filter(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { filter(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { filter(array, true); }).toThrowError('true is not a function');
        expect(function() { filter(array, 1); }).toThrowError('1 is not a function');
    });
});

