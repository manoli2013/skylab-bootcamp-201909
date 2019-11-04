describe('find hooray', function () {
    it('should return the first element that comply the condition', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var expression = function (x) {
            return x > 10;
        };
        var result = hor.find(expression);
        expect(result).toBe(12);
    });

    it('should return undefined if any element comply the condition', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var expression = function (x) {
            return x === 21;
        };
        var result = hor.find(expression);
        expect(result).toBeUndefined();
    });

    it('should return undefined if the hooray is empty', function () {
        var hor = new Hooray();
        var expression = function (x) {
            return x > 10;
        };
        var result = hor.find(expression);
        expect(result).toBeUndefined();
    });

    it('should fail on undefined expression', function () {
        var hor = new Hooray();
        var expression //= function (x) { return x >= 10; };

        expect(function () { hor.find(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });
});