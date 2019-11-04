describe('reduce', function(){


    it('Should succeed, reducing all numbers', function(){
        var arr, result, expected;

        arr = [10, 20, 30, 40];

        expected = 100;

        result = reduce(arr, function(temp, num) { return temp + num; });


        expect(result).toBe(expected);
    });

    it('Should succeed, reducing all the inputs (several types)', function(){
        var arr, result, expected;

        arr = [10, 20, 30, 40, 'a', 'b'];
        expected = '100ab'
        result = reduce(arr, function(temp, num) { return temp + num; });


        expect(result).toBe(expected);
    });


    it('Should succeed reducing the array with letters at first position', function(){
        var arr, result, expected;

        arr = ['noli',10, 20, 30, 40];
        expected = 'noli10203040'
        result = reduce(arr, function(temp, num) { return temp + num; });


        expect(result).toBe(expected);
    });

  

    it('should fail on non-array input', function () {

        expect(function () { reduce(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { reduce(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { reduce(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { reduce('a'); }).toThrowError(TypeError, 'a is not an array');
    });

    it('should fail on non function', function () {

        var arr = [10, 20, 30, 40];
        
        expect(function () { reduce(arr, undefined); }).toThrowError(TypeError, 'undefined is not a function');

        expect(function() { reduce(arr, true); }).toThrowError('true is not a function');

        expect(function() { reduce(arr, 1); }).toThrowError('1 is not a function');
    });


});