describe('unshift', function () {
    it('should unshift one or more elements to the beginning of an array', function () {
        var arr, expected, result;
        arr = [1, 2, 3, 4];

        expected = ["b", 4, 5, 6, 7, 1, 2, 3, 4];
        result = unshift(arr, 'b', 4, 5, 6, 7);

        expect(result).toEqual(expected);
    });

    it('should fail on non-array input', function () {

        expect(function () { unshift(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { unshift(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { unshift(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { unshift('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});