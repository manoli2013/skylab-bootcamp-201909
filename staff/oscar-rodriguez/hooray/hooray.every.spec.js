describe ('Hooray.prototype.every', function () {

    it ('should return true when all items acomplish an expression',function () {

        var hooray = new Hooray (1,2,3,4);

        var expresion = function (item) { return typeof item === 'number' };

        expect(hooray.every(expresion)).toBe(true);

    });

    it ("should return false when any item don't acomplish an expression",function () {

        var hooray = new Hooray (1,2,"a",4);
        var expresion = function (item) { return typeof item === 'number' };

        expect(hooray.every(expresion)).toBe(false);

    });

    it ("shouldn't modify the original Hooray",function () {

        var hooray = new Hooray (1,2,"a",4);
        var hooray_copy = new Hooray (1,2,"a",4);
        var expresion = function (item) { return typeof item === 'number' };

        hooray.every(expresion);
        expect (hooray.length).toBe(hooray_copy.length);

        expect(hooray).toEqual(hooray_copy);

    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        expect(function () { hooray.every(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { hooray.every(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { hooray.every(1); }).toThrowError(TypeError, '1 is not a function');
    });
})