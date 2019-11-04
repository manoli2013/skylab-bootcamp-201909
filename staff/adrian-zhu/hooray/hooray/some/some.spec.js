describe('Hooray.prototype.some', function () {
    it('should return true on all items matching condition', function() {   var hooray, result, expected;

        hooray = new Hooray (1, 2, 3, 4);

        expected = true;

        result = hooray.some(function (x) { return x > 0; });

        expect(result).toBe(expected);
    });

    
    it('should return false on any of the items not matching the condition', function () {
        var hooray, result, expected

        hooray = new Hooray(1, 2, 3, 4);

        expected = false;
        
        result = hooray.some(function (y) { return y < 0; });

        expect(result).toBe(expected);
    });


    
    it('should break on undefined function', function () {
        var hooray = new Hooray(1, 2, 3, 4);

        expect(function () { hooray.some(undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { hooray.some(true); }).toThrowError('true is not a function');
        
        expect(function() { hooray.some(1); }).toThrowError('1 is not a function');
    });

});