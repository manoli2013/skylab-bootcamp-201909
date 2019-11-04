describe("Hooray.prototype.indexOf", function () {

    it("should return the index only with first value", function () {
        var hooray, result, expected;

        hooray = new Hooray ('Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon');
        result = hooray.indexOf('XaviLigon');
        expected = 4;

        expect(result).toBe(expected);  
    });

    it("should return success with all parameters", function () {
        var hooray, result, expected;

        hooray = new Hooray ('Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon', 'Xavi', 'XaviCachondo', 'XaviLigon');
        result = hooray.indexOf('XaviLigon', 5);
        expected = 7;

        expect(result).toBe(expected); 
    });
    
    
    it('should failed more than 3 arguments', function () {

        var hooray = new Hooray('Adrían', 'Elena', 'Martín', 'Rubén', 'XaviLigon', 'Xavi', 'XaviCachondeando', 'XaviLigon');

        expect(function () { hooray.indexOf(0, 0, 0 ,0); }).toThrowError('too many arguments');

    });
    
});