describe('Hooray.prototype.include', function () {

    it('should determines whether an hooray includes a certain value among its entries', function (){

        var hooray, result;

        hooray = new Hooray(1, 2, 3, 4);
    
        result = hooray.includes(2); 
    
        expected = true;
    
        expect(result).toEqual(true);
    });

    
    it('should return false if val is undefined or null', function () {

        var hooray, resultUndefined, resultNull;

        hooray = new Hooray (1, 2, 3, 4);

        resultUndefined = hooray.includes(undefined);
        expect(resultUndefined).toBe(false);

        resultNull = hooray.includes(null);
        expect(resultNull).toBe(false);

    });
    
});