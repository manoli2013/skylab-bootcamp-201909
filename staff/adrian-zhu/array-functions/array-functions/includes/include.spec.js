describe('include', function () {

    it('should determines whether an array includes a certain value among its entries', function (){

        var arr, result;

        arr = [1, 2, 3, 4];
    
        result = includes(arr, 2); 
    
        expected = true;
    
        expect(result).toEqual(true);
    });

    it('should fail on non-array input', function () {

        expect(function () { includes(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { includes(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { includes(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { includes('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
    
    it('should return false if val is undefined or null', function () {

        var arr, resultUndefined, resultNull;

        arr = [1, 2, 3, 4];
        resultUndefined = includes(arr, undefined);
        expect(resultUndefined).toBe(false);

        resultNull = includes(arr, undefined);
        expect(resultNull).toBe(false);

    });
    
});