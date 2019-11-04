describe('unshift', function () {
    it('should insert a single item at the beginning of the array', function () {
        var array = [1, 2, 3];
        
        unshift(array, 0);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(4);
               
        var expected = [0,1,2,3];
        expect(array).toEqual(expected);
    });

    it('should insert a multiple items at the beginning of the array', function () {
        var array = [1, 2, 3];
        
        unshift(array,4,5,6);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(6);
               
        var expected = [4,5,6,1,2,3];
        expect(array).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];

        expect(function() { concat(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail in the array because it has been defined as a string', function () {
        var array = 'd';

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a number', function () {
        var array = 1;

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

    it('should fail in the array because it has been defined as a function', function () {
        var array = console.log();

        expect(function() { concat(array); }).toThrowError(TypeError, array + ' is not an array');
    });

});