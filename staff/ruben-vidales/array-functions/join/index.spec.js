describe('join', function () {
    it('should returns a string concatenating the elements of the array with the separator', function () {
        var letters = ['a', 'b', 'c'];
        var result = join(letters, '-');
        expect(result).toBe('a-b-c');
    });
    it('should returns a string concatenating the elements of the array without separator because the separator is not empty', function () {
        var letters = ['a', 'b', 'c'];
        var result = join(letters, '');
        expect(result).toBe('abc');
    });
    it('should returns a string concatenating the elements of the array with a comma because the separator is not declared', function () {
        var letters = ['a', 'b', 'c'];
        var result = join(letters);
        expect(result).toBe('a,b,c');
    });
    it('should fail on undefined array', function () {
        var letters // = ['a', 'b', 'c'];
        expect( function () { join(letters, '-'); }).toThrowError(TypeError, 'undefined is not an array');
    });
});