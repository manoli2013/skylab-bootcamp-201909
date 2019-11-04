describe('find', function () {
    it('should return the first element that comply the condition', function () {
        var array = [9, 3, 12, 5, 8, 130, 44];
        var expression = function (x) {
            return x > 10;
        };
        var result = find(array, expression);
        expect(result).toBe(12);
    });

    it('should return undefined if no element comply the condition', function () {
        var array = [9, 3, 12, 5, 8, 130, 44];
        var expression = function (x) {
            return x === 21;
        };
        var result = find(array, expression);
        expect(result).toBeUndefined();
    });

    it('should return undefined if the array is empty', function () {
        var array = [];
        var expression = function (x) {
            return x === 21;
        };
        var result = find(array, expression);
        expect(result).toBeUndefined();
    });

    it('should fail on undefined array', function() {
        var array //= [12, 5, 8, 130, 44];
        var expression = function (x) {
            return x >= 10;
        };

        expect(function(){find(array, expression)}).toThrowError(TypeError, 'undefined is not an array');
    });    

    it('should fail on undefined expression', function() {
        var array = [12, 5, 8, 130, 44];
        var expression //= function (x) { return x >= 10; };

        expect(function () { find(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});