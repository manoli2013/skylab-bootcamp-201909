describe('splice', function() {
    it('should return the spliced array after the change', function() {
        var arr, expected, result;

        arr = [1, 2, 3, 4];
        result = splice(arr, 1, 2);
        expected = [2, 3];

        expect(result).toEqual(expected);
        expect(result[1]).toBe(3);
        expect(arr).toEqual([1, 4]);
    });

    it('should fail on non-array input', function () {
        expect(function () { splice(); }).toThrowError(TypeError, 'undefined is not an array');
    
        expect(function () { splice(true); }).toThrowError(TypeError, 'true is not an array');
    
        expect(function () { splice(1); }).toThrowError(TypeError, '1 is not an array');
    
        expect(function () { splice('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    
    it('should failed more than 4 arguments', function () {

        var arr = [1, 2, 3, 4];

        expect(function () { splice(arr, 0, 0, 0 ,0); }).toThrowError('only with 3 arguments');

    });
});