describe('every hooray', function () {
    it('should check every elements of the hooray within the expression and return true', function () {
        var hor = new Hooray(1, 30, 39, 29, 10, 13);
        var expression = function (x) { return x < 40; };
        var result = hor.every(expression);

        expect(result).toBeTruthy();
    });

    it('should return true if the hooray is empty', function () {
        var hor = new Hooray();
        var expression = function (x) { return x < 40; };
        var result = hor.every(expression);

        expect(result).toBeTruthy();
    });

    it('should fail on undefined expression', function () {
        var hor = new Hooray(1, 30, 39, 29, 10, 13);
        var expression //= function (x) { return x < 40; };

        expect(function () { hor.every(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });
});