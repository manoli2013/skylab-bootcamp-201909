describe('push', function () {
    it('should push a single item', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd')).toBe(4);
        expect(array.length).toBe(4);
        expect(array[array.length - 1]).toBe('d');

        var expected = ['a', 'b', 'c', 'd'];
        expect(array).toEqual(expected);
    });

    it('should push multiple items', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(array.length).toBe(11);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        expect(array).toEqual(expected);
    });

    
    it('should fail on non-array input', function () {
        expect(function () { push(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { push(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { push(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { push('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});