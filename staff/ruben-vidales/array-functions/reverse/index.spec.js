describe('reverse', function () {
    it('should return the array ordered in the reverse direction', function () {
        var array = [9, 3, 12, 5, 8, 130, 44];
        reverse(array);
        var expected = [44, 130, 8, 5, 12, 3, 9];

        expect(array).toEqual(expected);
    });
    it('should fail on undefined array', function() {
        var array = [9, 3, 12, 5, 8, 130, 44];

        expect(function(){reverse()}).toThrowError(TypeError, 'undefined is not an array');
    });  
});