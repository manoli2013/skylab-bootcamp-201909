describe('reverse', function(){

    it('Should succeed the operation, reversing the first item of the array to the last item and viceversa', function(){
        var arr, result, expected;

        arr = [1, 2, 3, 4];
        expected = [4, 3, 2, 1];
        result = reverse(arr);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);
    });

    it('Should succeed the operation, reversing the first item of the array to the last item and viceversa', function(){
        var arr, result, expected;

        arr = [1, 'b', 3, 'a'];
        expected = ['a', 3, 'b', 1];
        result = reverse(arr);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);
    });

    it('should return an empty array', function () {
        var arr, result, expected;

        arr = [];
        expected = [];
        result = reverse(arr);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(0);
    });

    it('should fail on non-array input', function () {
        expect(function () { reverse(); }).toThrowError(TypeError, 'undefined is not an array');
    
        expect(function () { reverse(true); }).toThrowError(TypeError, 'true is not an array');
    
        expect(function () { reverse(1); }).toThrowError(TypeError, '1 is not an array');
    
        expect(function () { reverse('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
}); 