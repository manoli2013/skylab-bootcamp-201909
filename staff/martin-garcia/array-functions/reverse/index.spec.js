describe('reverse', function() {
    it('Should reverse the array', function() {
        var array = [1, 2, 3, 4];
        var expectedArray = [4, 3, 2, 1];
        reverse(array);
        expect(array).toEqual(expectedArray);

    });

    it('Shouldnt modify because is an empty array', function() {
        var array = [];
        var expectedArray = [];
        reverse(array);
        expect(array).toEqual(expectedArray);
    });

    it('Should throw an error if array is not an Array', function() {
        var array = 'pepito';
        expect(function() { reverse(array) }).toThrowError(TypeError, array + ' is not an Array');
    });

});