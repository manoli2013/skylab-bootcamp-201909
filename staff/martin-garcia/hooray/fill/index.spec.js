describe('Hooray.prototype.fill', function() {
    it('Should fill entire hooray without value(undefined)', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var expectedHooray = new Hooray(undefined, undefined, undefined, undefined);

        expect(hooray.fill()).toEqual(expectedHooray);
    });

    it('Should fill entire hooray with value', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var value = '2';
        var expectedHooray = new Hooray('2', '2', '2', '2');
        expect(hooray.fill(value)).toEqual(expectedHooray);
    });

    it('Should fill the hooray with start position', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var expectedHooray = new Hooray(1, '2', '2', '2');

        var value = '2';
        var start = 1;
        expect(hooray.fill(value, start)).toEqual(expectedHooray);
    });

    it('Should fill the hooray with start and end position', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var expectedHooray = new Hooray(1, '2', 3, 4);

        var value = '2';
        var start = 1;
        var end = 2;
        expect(hooray.fill(value, 1, end)).toEqual(expectedHooray);
    });

    it('Should throws an error if start is not a Number or undefined', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var value = '2';
        var start = '1';
        expect(function() { hooray.fill(value, start) }).toThrowError(TypeError, "expected expression, got ,");
    });

    it('Should throws an error if end is not a Number or undefined', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var value = '2';
        var start = 1;
        var end = '2';
        expect(function() { hooray.fill(value, start, end) }).toThrowError(TypeError, "expected expression, got ,");
    });
});