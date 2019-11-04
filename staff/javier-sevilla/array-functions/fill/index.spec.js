describe('fill', function () {
    it('should update the array with the value passed only in the marked limits.', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array,11, 3, 7);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        expected = [1, 2, 3, 11, 11, 11, 11, 8, 9];
        expect(array).toEqual(expected);
    });

    it('should update the array with the value in from the beginning (no ending)', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11, 2);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [1, 2, 11, 11, 11, 11, 11, 11, 11];
        expect(array).toEqual(expected);
    });

    it('should update the array with only value without parameters limits', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [11, 11, 11, 11, 11, 11, 11, 11, 11];
        expect(array).toEqual(expected);
    });

    it('should update the array with the value when beginning is negative and no ending', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11, -4);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [1, 2, 3, 4, 5, 11, 11, 11, 11];
        expect(array).toEqual(expected);
    });

    it('should update the array with the value when beginning is negative and ending is negative', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11, -7, -3);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [1, 2, 11, 11, 11, 11, 7, 8, 9];
        expect(array).toEqual(expected);
    });

    it('should update the array with the value when the beginning and ending are both negatives and ending < beginning', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11, -7, -3);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [1, 2, 11, 11, 11, 11, 7, 8, 9];
        expect(array).toEqual(expected);
    });

    it('should update the array with the value from the beginning and ending are both negatives, begin < 0 and begin > length array', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array, 11, -32, -7);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [11, 11, 3, 4, 5, 6, 7, 8, 9];
        expect(array).toEqual(expected);
    });

    it('should update the array with an undefined value and no input parameters', function () {
        var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        fill(array);

        expect(array).toBeInstanceOf(Array);
        expect(array.length).toBe(9);

        var expected = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        expect(array).toEqual(expected);
    });

    it('should fail on first parameter non-array', function () {
        expect(function () { fill(); }).toThrowError(TypeError, 'undefined is not an array');

        expect(function () { fill(true); }).toThrowError(TypeError, 'true is not an array');

        expect(function () { fill(1); }).toThrowError(TypeError, '1 is not an array');

        expect(function () { fill('a'); }).toThrowError(TypeError, 'a is not an array');
    });
});