describe('Map', function () {
    it('should succeed on correct array and expression, multiplying by 2 all numbers of array', function () {
        var array = [1, 2, 3];
        var multiply = function(number) { return number * 2; };

        var result = map(array, multiply);

        expect(result).not.toBe(array);
        expect(result).toBeInstanceOf(Array);
        expect(array.length).toBe(result.length);

        var expected = [2,4,6];
        expect(expected).toEqual(result);

    });

    it('should succeed on correct array and expression, return true or false in all positions of array', function () {
        var array = [1, 2, 3];
        var boleana = function(number) { return number < 2; };

        var result = map(array, boleana);

        expect(result).not.toBe(array);
        expect(result).toBeInstanceOf(Array);
        expect(array.length).toBe(result.length);

        var expected = [true,false,false];
        expect(expected).toEqual(result);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { map(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { map(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { map(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { map(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { map(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });
});