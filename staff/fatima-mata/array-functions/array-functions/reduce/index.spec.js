describe('reduce', function(){

    it('should succeed the operation, reducing all the numbers items of array base into a string on the condition of expression', function(){

        var a, result, expected;

        a = [1, 2, 3, 4];
        expected = 10;
        result = reduce(a, function(aux, num) { return aux + num; });
        
        expect(result).toBe(expected);
    });

    it('should succeed the operation, reducing all the items of array into a string base on the condition of expression', function(){
        
        var a, result, expected;

        a = [1, 2, 3, 4, 'a', 'b'];
        expected = '10ab'
        result = reduce(a, function(aux, num) { return aux + num; });
        
        expect(result).toBe(expected);
    });

    it('should succeed the operation, reducing the array into string having alphabet letters in first position', function(){
        
        var a, result, expected;

        a = ['hola',1, 2, 3, 4];
        expected = 'hola1234'
        result = reduce(a, function(aux, num) { return aux + num; });

        expect(result).toBe(expected);
    });

    it('should succeed the operation, reducing the array into string having alphabet letters in first position', function(){
        
        var a, result, expected;

        a = ['hola',1 ,2, 3, 4];
        expected = 'hola1234'
        result = reduce(a, function(aux, num) { return aux + num; });

        expect(result).toBe(expected);
    });

    it('should fail on non-array input', function () {

        expect(function () { reduce(); }).toThrowError(TypeError, 'undefined is not an array');
        expect(function () { reduce(true); }).toThrowError(TypeError, 'true is not an array');
        expect(function () { reduce(1); }).toThrowError(TypeError, '1 is not an array');
        expect(function () { reduce('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    it('should break on undefined function', function () {

        var a = [1, 2, 3, 4];

        expect(function () { reduce(a, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { reduce(a, true); }).toThrowError('true is not a function');
        expect(function() { reduce(a, 1); }).toThrowError('1 is not a function');
    });
});


