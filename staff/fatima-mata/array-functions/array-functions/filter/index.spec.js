describe('filter', function () {
    
    it('should return all the values which complete the filter condition', function (){

        var a, expected, result;

        a = [1, 2, 3, 4];
        result = filter(a, function (value){return value > 1}); 
    
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

        var a = [1, 2, 3, 4];

        expect(function () { filter(a, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { filter(a, true); }).toThrowError('true is not a function');
        expect(function() { filter(a, 1); }).toThrowError('1 is not a function');
    });
});