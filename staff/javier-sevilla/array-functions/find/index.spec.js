describe('find', function () {
    it('should create a table applying the expression', function () {
        var array = [1,2,3,4,5,6,7,8];
        var expression = function(currentValue) { return currentValue > 5; }
        var result = find(array, expression);


        expect(result).not.toBe(array);
        expect(result).not.toBeInstanceOf(Array);
        expect(array.length).toBe(8);

        var expected = 6;
        expect(expected).toEqual(result);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { find(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { find(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { find(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { find(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { find(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });
});

