describe('some', function () {
    it('should return true on all items matching condition', function() {     var arr, result, expected;

        arr = [1, 2, 3, 4];

        expected = true;

        result = some(arr, function (x) { return x > 0; });

        expect(result).toBe(expected);
    });

    it('should return false on any of the items not matching the condition', function () {
        var arr, result, expected

        arr = [1, 2, 3, 4];

        expected = false;
        
        result = some(arr, function (y) { return y < 0; });

        expect(result).toBe(expected);
    });

    
    it('should fail on non-array input', function () {
        expect(function () { some(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { some(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { some(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { some('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    
    it('should break on undefined function', function () {
        var arr = [1, 2, 3, 4];

        expect(function () { some(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { some(arr, true); }).toThrowError('true is not a function');
        
        expect(function() { some(arr, 1); }).toThrowError('1 is not a function');
    });

});