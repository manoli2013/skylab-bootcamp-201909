describe('Hooray.prototype.splice', function() {

    it('should return the spliced array after the change', function() {
        
        var hooray, expected, result;

        hooray = new Hooray (1, 2, 3, 4);

        result = hooray.splice(1, 2);

        expected = new Hooray (2, 3);
        expect(result).toEqual(expected);
        expect(result[1]).toBe(3);
    });

    it('should failed more than 2 arguments', function () {

        var hooray = new Hooray (1, 2, 3, 4);

        expect(function () { hooray.splice(0, 0, 0); }).toThrowError('only with 2 arguments');
    }); 
});
