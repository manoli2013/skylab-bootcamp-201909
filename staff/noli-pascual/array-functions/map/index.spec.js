describe('map', function () {
    it('should succeed on correct array and expression, adding 2 to all numbers', function () {
        
        var numbers = [1, 2, 3];
        var result = [];
        
        var addTwo = function (number) { return number + 2; };

        result = map(numbers, addTwo);

        var expected = [3, 4, 5];
        expect(result).toEqual(expected);
        expect(addTwo).toBeInstanceOf(Function);

    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        expect(function () { map(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { map(array, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { map(array, 1); }).toThrowError(TypeError, '1 is not a function');
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var addTwo = function (number) { return number + 2; };

        expect(function() { map(array, addTwo); }).toThrowError(TypeError,'undefined is not an array');
    });


    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var addTwo; // not defined

        expect(function() { map(array, addTwo); }).toThrowError(TypeError, 'undefined is not a function');
    });


});

