describe('Hooray.prototype.filter', function () {
    it('should create a new hooray adding the elements that meet the expression', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8);
        var expression = function(currentValue) { return currentValue < 5; }

        var result = hooray.filter(expression);

        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);
        expect(result.length).toBe(4);
        expect(hooray.length).toBe(8);

        var chars = [1,2,3,4];
        for (var i = 0; i < chars.length; i++)
        expect(result[i]).toBe(chars[i]);
    });

    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1, 2, 3);
        var expression; // = console.log;

        expect(function() { hooray.filter(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        //throw Error('hola mundo');

        expect(function () { hooray.filter(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.filter(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { hooray.filter(1); }).toThrowError(TypeError, '1 is not a function');
    });
});

