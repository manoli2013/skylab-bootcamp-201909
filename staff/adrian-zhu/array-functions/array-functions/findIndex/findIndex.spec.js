describe('findIndex', function () {
    
    it('should find the index of first element that accomplish the condition of function', function (){

        var arr, expected, result;

        arr = [1, 2, 3, 4];
    
        result = find(arr, function (value){return value > 2}); 
    
        expected = 3;
    
        expect(result).toEqual(expected);
    });

        
    it('should fail on non-array input', function () {

        expect(function () { find(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { find(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { find(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { find('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    it('should break on undefined function', function () {

        var arr = [1, 2, 3, 4];

        expect(function () { find(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { find(arr, true); }).toThrowError('true is not a function');
        
        expect(function() { find(arr, 1); }).toThrowError('1 is not a function');
    });
    
});