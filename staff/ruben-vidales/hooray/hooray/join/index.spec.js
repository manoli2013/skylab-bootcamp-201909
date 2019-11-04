describe('join hooray', function () {
    it('should returns a string concatenating the elements of the array with the separator', function () {
        var hor = new Hooray ('a', 'b', 'c');
        var result = hor.join('-');
        expect(result).toBe('a-b-c');
    });
    it('should returns a string concatenating the elements of the array without separator because the separator is not empty', function () {
        var hor = new Hooray ('a', 'b', 'c');
        var result = hor.join('');
        expect(result).toBe('abc');
    });
    it('should returns a string concatenating the elements of the array with a comma because the separator is not declared', function () {
        var hor = new Hooray ('a', 'b', 'c');
        var result = hor.join();
        expect(result).toBe('a,b,c');
    });
});