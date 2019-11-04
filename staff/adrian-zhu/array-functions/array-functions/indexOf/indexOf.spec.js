describe("indexOf", function () {

    it("should return the index only with first value", function () {
        var arr, result, expected;

        arr = ['Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon'];
        result = indexOf(arr, 'XaviLigon');
        expected = 4;

        expect(result).toBe(expected);  
    });

    it("should return success with all parameters", function () {
        var arr, result, expected;

        arr = ['Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon', 'Xavi', 'XaviCachondo', 'XaviLigon'];
        result = indexOf(arr, 'XaviLigon', 5);
        expected = 7;

        expect(result).toBe(expected); 
    });
    
    it('should fail on non-array input', function () {

        expect(function () { indexOf(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { indexOf(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { indexOf(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { indexOf('a'); }).toThrowError(TypeError, 'a is not an array');
    });
    
    
    it('should failed more than 4 arguments', function () {

        var arr = ['Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon', 'Xavi', 'XaviCachondeando', 'XaviLigon'];

        expect(function () { indexOf(arr, 0, 0, 0)}).toThrowError('too many arguments');

    });
    
});