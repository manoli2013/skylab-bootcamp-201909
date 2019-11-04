describe('Hooray.prototype.slice', function() {
    it('method without parameters, should return the same hooray', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        expect(hooray.slice()).toEqual(hooray);
    });

    it('method with first parameter(start) parameters', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var start = 2;
        var expectedHooray = new Hooray(3, 4);
        expect(hooray.slice(start)).toEqual(expectedHooray);
    });

    it('The initial hooray should not change', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var expectedInitialHooray = new Hooray(1, 2, 3, 4);
        var start = 2;
        var end = 3;
        hooray.slice(start, end);
        expect(hooray).toEqual(expectedInitialHooray);
    });

    it('Should throw an error if start parameter is not an number or undefined', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var start = '1';
        expect(function() { hooray.slice(start) }).toThrowError(TypeError, "expected expression, got ,");
    });

    it('Should throw an error if end parameter is not an number or undefined', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var start = 1;
        var end = '1';

        expect(function() { hooray.slice(start, end) }).toThrowError(TypeError, "expected expression, got ,");
    });
});