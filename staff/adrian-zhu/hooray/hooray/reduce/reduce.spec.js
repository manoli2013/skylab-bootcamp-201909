describe('Hooray.prototype.reduce', function(){

    
    it('Should succeed the operation, reducing all the items of hooray base on the condition of expression', function(){
        var hooray, result, expected;

        hooray = new Hooray(1, 2, 3, 4);

        expected = 10;

        result = hooray.reduce(function(aux, num) { return aux + num; });

        
        expect(result).toBe(expected);
    });


    it('should break on undefined function', function () {

        var hooray = new Hooray(1, 2, 3, 4);

        expect(function () { hooray.reduce(undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { hooray.reduce(true); }).toThrowError('true is not a function');
        
        expect(function() { hooray.reduce(1); }).toThrowError('1 is not a function');
    });


});