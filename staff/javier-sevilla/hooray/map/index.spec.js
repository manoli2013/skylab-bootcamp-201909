describe('Hooray.prototype.map', function () {
    it('should succeed on correct array and expression, multiplying by 2 all numbers of array', function () {
        var hooray = new Hooray(1, 2, 3);
        var multiply = function(number) { return number * 2; };

        var result = hooray.map(multiply);

        expect(hooray.length).toBe(result.length);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(2);
        expect(result[1]).toBe(4);
        expect(result[2]).toBe(6);

        expect(hooray[0]).toBe(1);
        expect(hooray[1]).toBe(2);
        expect(hooray[2]).toBe(3);
    });

    it('should succeed on correct array and expression, concatenating all numbers', function () {
        var hooray = new Hooray(1, 2, 3);
        var boleana = function(number) { return number < 2; };

        result = hooray.map(boleana);

        expect(hooray.length).toBe(result.length);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(true);
        expect(result[1]).toBe(false);
        expect(result[2]).toBe(false);
    });

    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1, 2, 3);
        var expression; // = console.log;

        expect(function() { hooray.map(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        //throw Error('hola mundo');

        expect(function () { hooray.map(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.map(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { hooray.map(1); }).toThrowError(TypeError, '1 is not a function');
    });
});