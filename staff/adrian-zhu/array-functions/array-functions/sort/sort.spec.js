describe('sort', function(){

    it('Should succeed the operation, sorting the elements of array in place and return the sorted array', function(){
        var arr, result, expected;

        arr = [4, 5, -6, 7, 'M', 'n', 'N', 'm'];
        expected = [-6, 4, 5, 7, "M", "N", "m", "n"]
        result = sort(arr);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(8);
    });


    it('should fail on non-array input', function () {
        expect(function () { sort(); }).toThrowError(TypeError, 'undefined is not an array');
    
        expect(function () { sort(true); }).toThrowError(TypeError, 'true is not an array');
    
        expect(function () { sort(1); }).toThrowError(TypeError, '1 is not an array');
    
        expect(function () { sort('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
}); 