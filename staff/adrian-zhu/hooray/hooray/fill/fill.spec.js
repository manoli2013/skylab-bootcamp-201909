describe('Hooray.prototype.fill', function () {
    it('should iterate with all arguments introduced', function () {
        var hooray, expected, result;


        hooray = new Hooray (1, 2, 3, 4);
        expected = new Hooray (0, 0, 3, 4) ;
        result = hooray.fill(0, 0, 2) 

        expect(result).toEqual(expected)
    });

    
    it('should iterate with hooray + value + startIndex introduced', function () {

        var hooray, expected, result;

        hooray = new Hooray (1, 2, 3, 4, 5);
        expected = new Hooray (1, 2, 3, 1, 1);
        result = hooray.fill(1, 3)   

        expect(result).toEqual(expected)
    });

    
    it('should iterate with hooray + value introduced', function () {

        var hooray, expected, result;

        hooray = new Hooray (1, 2, 3, 4);
        expected = new Hooray (1, 1, 1, 1);
        result = hooray.fill(1) 

        expect(result).toEqual(expected)
    });

    it('should iterate with hooray introduced', function () {

        var hooray, expected, result;


        hooray = new Hooray (1, 2, 3, 4);
        expected = new Hooray (undefined, undefined, undefined, undefined);
        result = hooray.fill() 

        expect(result).toEqual(expected)
    });
    
    it('should iterate with negative values introduced', function () {

        var hooray, expected, result;


        hooray = new Hooray (1, 2, 3, 4);
        expected = new Hooray (1, 2, 3, 4);
        result = hooray.fill(0, -2, -2 )  

        expect(result).toEqual(expected)
    });
    it('should failed more than 4 arguments', function () {

        var hooray = new Hooray (1, 2, 3, 4);

        expect(function () { hooray.fill(0, 0, 0 ,0); }).toThrowError('only with 4 arguments');

    });
});