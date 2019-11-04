describe('Hooray.prototype.findIndex', function () {
    it('should return the index that meet the expression', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8);
        var expression = function(currentValue) { return currentValue > 5; }
    
        var result= hooray.findIndex(expression);

        expect(result).not.toBe(hooray);
        expect(result).not.toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(8);
        expect(result).toBe(5);

    });

    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1, 2, 3);
        var expression; // = console.log;

        expect(function() { hooray.findIndex(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        //throw Error('hola mundo');

        expect(function () { hooray.findIndex(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.findIndex(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { hooray.findIndex(1); }).toThrowError(TypeError, '1 is not a function');
    });
});

