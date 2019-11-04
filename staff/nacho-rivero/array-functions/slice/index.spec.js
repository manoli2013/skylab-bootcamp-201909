describe('slice', function () {
    it('should return a new array with the values in the given limits', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var result = slice(numbers, 3, 7);
        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);
        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);
        expected = [4, 5, 6, 7];
        expect(result).toEqual(expected);
    });

    it('should return a new array with no values when the beginning and ending are both negatives and ending < beginning', function () {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var result = slice(numbers, -3, -7);
        expect(result).not.toBe(numbers);
        expect(result).toBeInstanceOf(Array);
        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(numbers).toEqual(expected);
        expect(result.length).toBe(0);
    });
 
 });