describe('Hooray.prototype.sort', function(){

    it('Should succeed the operation, sorting the elements of array in place and return the sorted array', function(){
        var hooray, result, expected;

        hooray = new Hooray (4, 5, -6, 7, 'M', 'n', 'N', 'm');
        expected = new Hooray (-6, 4, 5, 7, "M", "N", "m", "n")
        result = hooray.sort();
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(8);
    });

}); 