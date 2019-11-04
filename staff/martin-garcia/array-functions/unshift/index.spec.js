describe('unshift()', function() {
    it('should add the elements at the beggining of the array', function() {
        var array = [1, 2, 3];
        var arrayToAdd = ['pepito', 3];
        var expectedArray = ['pepito', 3, 1, 2, 3];
        var expectedLength = 5;

        expect(unshift(array, arrayToAdd)).toBe(expectedLength);
        expect(array).toEqual(expectedArray);

    });

    it('Should throws an error if array is not an Array', function() {
        var array = 'pepito'
        var elements = [1, 2, 3];
        expect(function() { unshift(array, elements) }).toThrowError(TypeError, array + ' is not an Array');
    });

    it('Should throws an error if elements is not an Array', function() {
        var array = [1, 2, 3];
        var elements = 2;
        expect(function() { unshift(array, elements) }).toThrowError(TypeError, elements + ' is not an Array');
    });
});