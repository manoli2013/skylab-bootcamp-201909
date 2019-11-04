describe('filter', function () {
    
    it('should return all the values which complete the filter condition', function (){
        var arr, expected, result;

        arr = [1, 2, 3, 4];
    
        result = filter(arr, function (value){return value > 1}); 
    
        expected = [2, 3, 4];
    
        expect(result).toEqual(expected);

    });

    it('should fail on non-array input', function () {

        expect(function () { filter(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { filter(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { filter(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { filter('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    it('should break on undefined function', function () {

        var arr = [1, 2, 3, 4];

        expect(function () { filter(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { filter(arr, true); }).toThrowError('true is not a function');
        
        expect(function() { filter(arr, 1); }).toThrowError('1 is not a function');
    });
    

});