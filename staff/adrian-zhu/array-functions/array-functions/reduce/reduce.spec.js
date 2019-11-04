describe('reduce', function(){

    
    it('Should succeed the operation, reducing all the numbers items of array base into a string on the condition of expression', function(){
        var arr, result, expected;

        arr = [1, 2, 3, 4];

        expected = 10;

        result = reduce(arr, function(aux, num) { return aux + num; });

        
        expect(result).toBe(expected);
    });

    it('Should succeed the operation, reducing all the items (numbers + alphabet) of array into a string base on the condition of expression', function(){
        var arr, result, expected;

        arr = [1, 2, 3, 4, 'a', 'b'];
        expected = '10ab'
        result = reduce(arr, function(aux, num) { return aux + num; });

        
        expect(result).toBe(expected);
    });


    it('Should succeed the operation, reducing the array into string having alphabet letters in first position', function(){
        var arr, result, expected;

        arr = ['ruben',1, 2, 3, 4];
        expected = 'ruben1234'
        result = reduce(arr, function(aux, num) { return aux + num; });

        
        expect(result).toBe(expected);
    });

    it('Should succeed the operation, reducing the array into string having alphabet letters in first position', function(){
        var arr, result, expected;

        arr = ['ruben',1 ,2, 3, 4];
        expected = 'ruben1234'
        result = reduce(arr, function(aux, num) { return aux + num; });

        
        expect(result).toBe(expected);
    });

    it('should fail on non-array input', function () {

        expect(function () { reduce(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { reduce(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { reduce(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { reduce('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    it('should break on undefined function', function () {

        var arr = [1, 2, 3, 4];
        expect(function () { reduce(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { reduce(arr, true); }).toThrowError('true is not a function');
        
        expect(function() { reduce(arr, 1); }).toThrowError('1 is not a function');
    });


});


