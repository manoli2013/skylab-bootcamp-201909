describe('pop', function () {
    it('should pop a last item', function () {
        var arr, result, expected;

        arr = ['a', 'b', 'c']; 
        expected = 'c';
        result = pop(arr); 
  

        expect(result).toBe(expected); 
        expect(arr.length).toBe(2);
        expect(arr[arr.length - 1]).toBe('b');

    });
    
    it('should return undefined on empty array', function () {
        var arr, expected, result;

        arr = [];
        expected = undefined;
        result = pop(arr)

  
        expect(result).toBe(expected);
    });
    
    it('should fail on non-array input', function () {
        expect(function () { pop(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { pop(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { pop(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { pop('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
});