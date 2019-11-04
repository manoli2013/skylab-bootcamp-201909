describe('findIndex hooray', function () {
    it('should return the index of the first element that comply the condition', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var expression = function (x) {
            return x > 10;
        };
        var result = hor.findIndex(expression);
        expect(result).toBe(2);
    });

    it('should return -1 if no element of the array comply the condition', function () {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var expression = function (x) {
            return x > 1000;
        };
        var result = hor.findIndex(expression);
        expect(result).toBe(-1);
    });

    it('should return -1 if the array is empty', function () {
        var hor = new Hooray();
        var expression = function (x) {
            return x > 10;
        };
        var result = hor.findIndex(expression);
        expect(result).toBe(-1);
    });

    it('should fail on undefined expression', function() {
        var hor = new Hooray(9, 3, 12, 5, 8, 130, 44);
        var expression //= function (x) { return x >= 10; };

        expect(function () { hor.findIndex(expression); }).toThrowError(TypeError, 'undefined is not a function');
    }); 
});