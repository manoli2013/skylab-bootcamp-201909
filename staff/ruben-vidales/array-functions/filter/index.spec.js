describe('filter', function () {
    it('should return the elements that comply the condition', function () {
        var array = [12, 5, 8, 130, 44];
        var expression = function (x) {
            return x >= 10;
        };
        var result = filter(array, expression);
        var expected = [12,130,44]
  
        expect(result.length).toBe(3);
        expect(result).toEqual(expected);
    });

    it('should return an empty array if any element comply the condition', function () {
        var array = [12, 5, 8, 130, 44];
        var expression = function (x) {
            return x == 6;
        };
        var result = filter(array, expression);
        var expected = []
  
        expect(result.length).toBe(0);
        expect(result).toEqual(expected);
    });

    it('should fail on undefined array', function() {
        var array //= [12, 5, 8, 130, 44];
        var expression = function (x) {
            return x >= 10;
        };

        expect(function(){filter(array, expression)}).toThrowError(TypeError, 'undefined is not an array');
    });    

    it('should fail on undefined expression', function() {
        var array = [12, 5, 8, 130, 44];
        var expression //= function (x) { return x >= 10; };

        expect(function () { every(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });  
});