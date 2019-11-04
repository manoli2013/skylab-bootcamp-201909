describe('Hooray.prototype.reduce', function(){
    
    it('should succeed the operation, reducing all the items of hooray base on the condition of expression', function(){
        
        var a, result, expected;

        a = new Hooray(1, 2, 3, 4);
        expected = 10;
        result = a.reduce(function(aux, num) { return aux + num; });
        
        expect(result).toBe(expected);
    });

    it('should break on undefined function', function () {

        var a = new Hooray(1, 2, 3, 4);

        expect(function () { a.reduce(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { a.reduce(true); }).toThrowError('true is not a function');
        expect(function() { a.reduce(1); }).toThrowError('1 is not a function');
    });
});