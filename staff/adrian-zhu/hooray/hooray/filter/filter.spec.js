describe('Hooray.prototype.filter', function () {
    
    it('should return all the values which complete the filter condition', function (){
        var hooray, expected, result;

        hooray = new Hooray (1, 2, 3, 4);

        expected = new Hooray (2, 3, 4);
    
        result = hooray.filter(function (value){return value > 1}); 
    
        expect(result).toEqual(expected);

    });

    it('should return empty hooray if no elements pass the condition', function () {
        var hooray, expected, result;

        hooray = new Hooray (1,2,3);
        expected = new Hooray ();
        result = hooray.filter(function (value){return value > 5});

        expect(result).toEqual(expected);
    });

        
    it('should return empty hooray if first hooray is empty', function () {
        var hooray, expected, result;

        hooray = new Hooray ();
        expected= new Hooray ();
        result = hooray.filter(function (value){return value > 5});

        expect(result).toEqual(expected);
    });

    it('should break on undefined function', function () {

        var hooray = [1, 2, 3, 4];

        expect(function () { hooray.filter(undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { hooray.filter(true); }).toThrowError('true is not a function');
        
        expect(function() { hooray.filter(1); }).toThrowError('1 is not a function');
    });

});