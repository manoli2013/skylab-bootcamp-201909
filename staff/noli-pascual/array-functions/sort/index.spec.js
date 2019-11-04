describe('sort', function () {
    it('should sort numbers', function () {
        var array = [2, 1, 3, 6, 7, 8, 5];
        
        sort(array);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(7);
               
        var expected = [1, 2, 3, 5, 6, 7, 8];
        expect(array).toEqual(expected);
    });

    it('should insert a multiple items at the beginning of the array', function () {
        var array = ['a', 'o', 'j', 'e', 'E'];
        
        sort(array);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(5);
               
        var expected = ["E", "a", "e", "j", "o"];
        expect(array).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; 
        expect(function() { sort(array); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on wrong array as parameter', function () {

        expect(function() { sort(1); }).toThrowError(TypeError, '1 is not an array');
    
        expect(function() { sort(true); }).toThrowError(TypeError, 'true is not an array');
    
        expect(function() { sort('Hello world'); }).toThrowError(TypeError, 'Hello world is not an array');
    });

});