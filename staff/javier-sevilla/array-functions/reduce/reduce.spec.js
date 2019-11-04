describe('Reduce', function () {
    it('should succeed on correct array and expression, multiplying by number all numbers of array and return total value', function () {
        var array = [1, 2, 3];
        var add = function(acc,number) { return acc  + number; };

        var result = reduce(array, add);

        expect(result).not.toBe(array);
        expect(result).not.toBeInstanceOf(Array);
        expect(array.length).toBe(3);

        var expected = 6;
        expect(expected).toEqual(result);

    });

    it('should succeed on correct array and expression, return true or false in all positions of array', function () {
        var array = [1, 2, 3];
        var multiply = function(acc,number) { return acc  * number; };

        var result = reduce(array, multiply);

        expect(result).not.toBe(array);
        expect(result).not.toBeInstanceOf(Array);
        expect(array.length).toBe(3);

        var expected = 6;
        expect(expected).toEqual(result);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { reduce(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { reduce(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { reduce(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { reduce(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { reduce(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });
});