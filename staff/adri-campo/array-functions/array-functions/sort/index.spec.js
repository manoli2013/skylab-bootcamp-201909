describe('sort', function () {
    it('should sort numbers', function () {
        var array = [3,6,1,2,8,5,7];
        
        sort(array);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(7);
               
        var expected = [1, 2, 3, 5, 6, 7, 8];
        expect(array).toEqual(expected);
    });
    
    it('should insert a multiple items at the beginning of the array', function () {
        var array = ['a', 'j', 'o', 'E', 'e'];
        
        sort(array);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(5);
               
        var expected = ["E", "a", "e", "j", "o"];
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