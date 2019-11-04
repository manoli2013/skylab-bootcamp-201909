describe('every', function () {
    it('should return true if  all items matching condition', function() {   var arr, result;

        arr = [1, 2, 3, 4];

        result = every(arr, function (x) { return x > 0; });

        expect(result).toBeTruthy;
    });

    it('should return false if any of the items not matching the condition', function () {
        var arr, result;

        arr = [1, 2, 3, 4];
        
        result = every(arr, function (y) { return y < 0; });

        expect(result).toBeTruthy;
    });

    
    it('should fail on non-array input', function () {
        expect(function () { every(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { every(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { every(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { every('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    
    it('should break on undefined function', function () {
        var arr = [1, 2, 3, 4];

        expect(function () { every(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { every(arr, true); }).toThrowError('true is not a function');
        
        expect(function() { every(arr, 1); }).toThrowError('1 is not a function');
    });

});