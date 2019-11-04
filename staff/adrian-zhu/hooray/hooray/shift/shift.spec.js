
describe('Hooray.prototype.shift', function () {

    it('should shift the first item', function () {
        var hooray, expected, result;
        hooray = new Hooray(1, 2, 3, 4);
    

        result = hooray.shift();
        expected = 1;
        
        expect(result).toEqual(expected);

    });

});