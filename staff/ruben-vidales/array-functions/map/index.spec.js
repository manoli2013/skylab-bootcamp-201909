describe('map', function () {
    it('should applys the expression over each element', function () {
        var ar = [1, 2, 3, 4, 5];
        var expression = function (x) { return x * 5 };
        var result = map(ar, expression);
        expect(result.length).toBe(5);
        expect(result[0]).toBe(5);
        expect(result[result.length - 1]).toBe(25);
    });

    it('should fail on undefined array', function () {
        var array //= [1, 2, 3];
        var expression = function (x) { return x * 5 };

        expect(function () { map(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
 });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression //= function (x) { return x * 5 };

        expect(function () { map(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });
});