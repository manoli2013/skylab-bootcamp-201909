
describe('fill', function () {
    it('should iterate with all arguments introduced', function () {
        var arr, expected, result;

        arr = [1, 2, 3, 4];
        expected = [0, 0, 3, 4] ;
        result = fill(arr, 0, 0, 2)    

        expect(result).toEqual(expected)
    });

    
    it('should iterate with arr + value + startIndex introduced', function () {

        var arr, expected, result;

        arr = [1, 2, 3, 4, 5];
        expected = [1, 2, 3, 1, 1] ;
        result = fill(arr, 1, 3)

        expect(result).toEqual(expected)
    });

    
    it('should iterate with arr + value introduced', function () {

        var arr, expected, result;

        arr = [1, 2, 3, 4];
        expected = [1, 1, 1, 1] ;
        result = fill(arr, 1)    

        expect(result).toEqual(expected)
    });

    it('should iterate with arr introduced', function () {

        var arr, expected, result;

        arr = [1, 2, 3, 4];
        expected = [undefined, undefined, undefined, undefined] ;
        result = fill(arr)   

        expect(result).toEqual(expected)
    });
    
    it('should iterate with negative values introduced', function () {

        var arr, expected, result;


        arr = [1, 2, 3, 4];
        expected = [1, 2, 3, 4] ;
        result = fill(arr, 0, -2, -2 )  

        expect(result).toEqual(expected)
    });


    it('should fail on non-array input', function () {

        expect(function () { fill(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { fill(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { fill('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    
    it('should failed more than 4 arguments', function () {

        var arr = [1, 2, 3, 4];

        expect(function () { fill(arr, 0, 0, 0 , 0); }).toThrowError('only with 4 arguments');

    });
    
});

