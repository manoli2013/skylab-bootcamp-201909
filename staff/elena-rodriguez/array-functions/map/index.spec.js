describe('map', function () {
    it('should succeed on correct new array and expression, adding two to all numbers', function () {
        var numbers = [1, 2, 3, 4];
        var addTwo = function (number) { return number + 2};
        var result = map(numbers, addTwo);
        var test = [3, 4, 5, 6];
        expect(result).toEqual(test);
    });

    it('should succed on correct new array, that contains the square root of each number', function () {
        var numbers = [1, 2, 3];
        var sqrRoot = function (number) { return Math.sqrt(number);};
        var result = map(numbers, sqrRoot);
        var test = [1, 1.4142135623730951, 1.7320508075688772];
        expect(result).toEqual(test);
    });


    it('should fail on undefined given array', function () {
        var imUndefined; 
        var sqrRoot = function (number) { return Math.sqrt(number);};
        expect(function() { map (imUndefined, sqrRoot); }).toThrowError(TypeError, 'undefined is not an array')
    });


    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression;

        expect(function() { map (array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });


    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        expect(function() { map (array, true); }).toThrowError('true is not a function');
        expect(function() { map (array, 1); }).toThrowError('1 is not a function');
    });
});

