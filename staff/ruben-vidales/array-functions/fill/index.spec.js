describe('fill', function () {
    it('should every position in the array with the value of the second parameter', function () {
        var ar = [1, 2, 3, 4];
        var result = fill(ar, 5);

        expect(result.length).toBe(4);
        expect(ar).toBe(result);
        expect(ar).toEqual([5, 5, 5, 5]);
    });

    it('should every position in the array with the value of the second parameter and start in the position indicated by the third parameter', function () {
        var ar = [1, 2, 3, 4];
        var result = fill(ar, 5, 1);

        expect(result.length).toBe(4);
        expect(ar).toBe(result);
        expect(ar).toEqual([1, 5, 5, 5]);
    });

    it('should every position in the array with the value of the second parameter and start in the position indicated by the third parameter and end in the position idicated by the forth', function () {
        var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var result = fill(ar, 5, 2, 7);

        expect(result.length).toBe(10);
        expect(ar).toBe(result);
        expect(ar).toEqual([1, 2, 5, 5, 5, 5, 5, 5, 9, 10]);
    });

    it('should fail on undefined array', function () {
        var ar //= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        expect(function () { fill(ar, 2); }).toThrowError(TypeError, 'undefined is not an array');
    });

});