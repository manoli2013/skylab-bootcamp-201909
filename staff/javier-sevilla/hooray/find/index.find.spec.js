describe('Hooray.prototype.find', function () {
    it('should return the first element that meet the expression', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8);
        var expression = function(currentValue) { return currentValue > 5; }
        var result = hooray.find(expression);


        expect(result).not.toBe(hooray);
        expect(result).not.toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(8);

        var expected = 6;
        expect(expected).toEqual(result);
    });

    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1, 2, 3);
        var expression; // = console.log;

        expect(function() { hooray.find(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        //throw Error('hola mundo');

        expect(function () { hooray.find(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.find(true); }).toThrowError('true is not a function');
        expect(function() { hooray.find(1); }).toThrowError('1 is not a function');
    });
});

