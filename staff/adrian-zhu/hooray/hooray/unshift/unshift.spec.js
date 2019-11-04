
describe('Hooray.prototype.unshift', function () {
    it('should unshift one or more elements to the beginning of an array', function () {
        var hooray, expected, result;
        hooray = new Hooray (1, 2, 3);

        expected = 6;
        result = hooray.unshift('b', 4);
    
        console.log(expect);
        console.log(result);

        expect(result).toEqual(expected);
    });

});
