describe('Hooray.prototype.some', function () {
    it('should create a table applying the expression', function () {
        var hooray = new Hooray(1,2,3,7);       

        var boleano = hooray.some(function(currentValue) { return currentValue > 6; });

        expect(boleano).toBe(true);

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(4);

    });


    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1,2,3,7);
        var expression; // = console.log;

        expect(function() { hooray.some(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1,2,3,7);

        //throw Error('hola mundo');

        expect(function () { hooray.some(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.some(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { hooray.some(1); }).toThrowError(TypeError, '1 is not a function');
    });
});

