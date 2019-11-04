describe('shift', function () {
    it('should shift the first item', function () {
        var array, expected, chars;
        array = [1, 2, 3, 4];

        expected = shift(array);
    
        expect(expected).toBe(1);
        expect(array.length).toBe(3);

        chars = [2, 3, 4];
        for (var i = 0; i < chars.length; i++)
            expect(array[i]).toBe(chars[i]);

    });

    it('should fail on non-array input', function () {

        expect(function () { shift(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { shift(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { shift(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { shift('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});