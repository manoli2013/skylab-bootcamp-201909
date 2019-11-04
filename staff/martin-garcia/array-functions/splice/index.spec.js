describe('splice', function() {
    it('should return a new array adding one element in the specific position', function() {
        var array = [1, 2, 3];
        expectedArray = [1, 'pepito', 2, 3];
        splice(array, 1, 0, 'pepito');
        expect(array).toEqual(expectedArray);

    });

    it('should return a new array adding more than one elements in the specific position', function() {
        var array = [1, 2, 3];
        var result = splice(array, 1, 0, 'pepito', 'grillo');
        var expectedArray = [1, 'pepito', 'grillo', 2, 3];
        expect(array).toEqual(expectedArray);
    });


    it('should return a new empty array if no parameters are included', function() {
        var array = [1, 2, 3];
        var result = splice(array);
        expect(result).not.toBe(array);
        expect(result.length).toBe(0);
    });


    it('should return a new array with the elements eliminated from the original array', function() {
        var array = [1, 2, 3];
        var result = splice(array, 1, 2);
        var expectedArray = [2, 3];
        splice(array, 1, 2);

        expect(result).toEqual(expectedArray);
    });

    it('should delete all elements after the index (index included)', function() {
        var array = [1, 2, 3];
        var result = splice(array, 1);
        expect(result).toEqual([2, 3]);
    });


    it('Should throws an error if elements is not an Array', function() {
        var array = 'pepito';
        expect(function() { splice(array, 1) }).toThrowError(TypeError, array + ' is not an Array');
    });
});