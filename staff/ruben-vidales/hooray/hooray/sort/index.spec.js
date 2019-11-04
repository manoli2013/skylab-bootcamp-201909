describe('sort hooray', function(){

    it('Should order elements of the hooray (only numbers)', function(){
        var hooray, result, expected;

        hooray = new Hooray (6,4,1,3,2,5);
        expected = new Hooray (1,2,3,4,5,6)
        result = hooray.sort();
        
        expect(result.length).toBe(6);
        expect(result).toEqual(expected);

    });

    it('Should order elements of the hooray (letters and numbers)', function(){
        var hooray, result, expected;

        hooray = new Hooray ('c','a','d','b','e');
        expected = new Hooray ('a','b','c','d','e')
        result = hooray.sort();
        
        expect(result.length).toBe(5);
        expect(result).toEqual(expected);

    });

}); 