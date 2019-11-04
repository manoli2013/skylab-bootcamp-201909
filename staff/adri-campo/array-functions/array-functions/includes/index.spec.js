describe('includes', function () {
    it('should find the past arguments in the array(5 is the argument)', function () {
        var array = [1,2,3,4,5];

        var finded = includes(array,5);

        expect(finded).toBe(true);
               
        var expected = [1,2,3,4,5];
        expect(array).toEqual(expected);
    });

    it('should find the past arguments in the array(multiple argument)', function () {
        var array = [1,2,3,4,5];

        var finded = includes(array,5,2,3);

        expect(finded).toBe(true);
               
        var expected = [1,2,3,4,5];
        expect(array).toEqual(expected);
    });

    it('should not find the past arguments in the array(one argument)', function () {
        var array = [1,2,3,4,5];

        var finded = includes(array,7);

        expect(finded).toBe(false);
               
        var expected = [1,2,3,4,5];
        expect(array).toEqual(expected);
    });

    it('should not find the past arguments in the array(multiple argument)', function () {
        var array = [1,2,3,4,5];

        var finded = includes(array,1,2,3,7);

        expect(finded).toBe(false);
               
        var expected = [1,2,3,4,5];
        expect(array).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { includes(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail in the array because it has been defined as a string', function () {
        var array = 'd';

        expect(function() { includes(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a number', function () {
        var array = 1;

        expect(function() { includes(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a function', function () {
        var array = console.log();

        expect(function() { includes(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});
