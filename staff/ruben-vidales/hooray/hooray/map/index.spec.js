describe('map hooray', function () {
    it('should applys the expression over each element', function () {
        var hoo = new Hooray (1, 2, 3, 4, 5);
        var expression = function (x) { return x * 5 };
        var result = hoo.map(expression);
        var expected = new Hooray(5, 10, 15, 20, 25);

        expect(result.length).toBe(5);
        expect(result).toEqual(expected);
    });

    it('should fail on undefined expression', function () {
        var hor = new Hooray(1, 2, 3, 4, 5);
        var expression //= function (x) { return x * 5 };

        expect(function () { hor.map(expression); }).toThrowError(TypeError, 'undefined is not a function');
    });
});