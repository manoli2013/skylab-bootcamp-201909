describe('slice', function(){
    it('should return a new array with the values of the original starting in the value of the first parameter', function(){
        var ar1 = [1,2,3,4,5,6,7,8];
        var result = slice(ar1, 3);
        expect(result.length).toBe(5); 
        expect(result).toEqual([4,5,6,7,8]);
    });
    it('should return a new array with the values of the original starting in the value of the first parameter and ends in the value of the second parameter', function(){
        var ar1 = [1,2,3,4,5,6,7,8,9,10,11,12];
        var result = slice(ar1, 4,10);
        expect(result.length).toBe(6);
        expect(result).toEqual([5,6,7,8,9,10]);
    });
    it('should return a new array with all the elements', function(){
        var ar1 = [1,2,3,4,5,6,7,8,9,10,11,12];
        var result = slice(ar1);
        expect(result.length).toBe(12);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12]);
    });

    it('should fail on undefined array', function(){
        expect(function () { slice(); }).toThrowError(TypeError, 'undefined is not an array');
    });
});