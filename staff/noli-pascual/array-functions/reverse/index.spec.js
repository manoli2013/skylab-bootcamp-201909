describe('reverse', function(){

    it('Should succeed reversing array', function(){
        var array = [10, 20, 30, 40];
        var result;
        var expected;

        expected = [40, 30, 20, 10];
        result = reverse(array);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);
    });

    it('should return an empty array', function () {
        var array = [];
        var result;
        var expected = [];
        
        result = reverse(array);
        
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