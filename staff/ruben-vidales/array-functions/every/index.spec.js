describe('every', function () {
    it('should check every elements of the array within the expression and return true', function () {
        var ar = [1, 30, 39, 29, 10, 13];
        var expression = function (x) { return x < 40; };
        var result = every(ar, expression);

        expect(result).toBeTruthy();
    });

    it('should return true if the array is empty', function () {
        var ar = [];
        var expression = function (x) { return x < 40; };
        var result = every(ar, expression);

        expect(result).toBeTruthy();
    });

    it('should fail on undefined array', function () {
        var ar //= [1, 30, 39, 29, 10, 13];
        var expression = function (x) { return x < 40; };

        expect(function () { every(ar, expression); }).toThrowError(TypeError, 'undefined is not an array');
 });

    it('should fail on undefined expression', function () {
        var ar = [1, 30, 39, 29, 10, 13];
        var expression //= function (x) { return x < 40; };

        expect(function () { every(ar, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

});