describe('Hooray.prototype.slice', function () {
    it('should return a new array with the values in the given limits', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(3, 7);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(4);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [4,5,6,7];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);

    });

    it('should return a new array with the values in from the beginning (no ending)', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(2);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(7);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });

    it('should return a new empty array (from an empty array) from a beginning (no ending)', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(12);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(0);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });


    it('should return a new array with the same values of the original array when no beginning and no ending', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice();

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(9);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });

    it('should return a new array with the last values of the original array when beginning is negative and no ending', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(-4);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(4);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [6, 7, 8, 9];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });

    it('should return a new array with values of the original array from the beginning and ending, both negatives', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(-7,-3);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(4);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [3, 4, 5, 6];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });

    it('should return a new array with no values when the beginning and ending are both negatives and ending < beginning', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(-3,-7);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(0);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);
    });

    it('should return a new array with values of the original array from the beginning and ending, begin < 0', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);

        var result = hooray.slice(-32,-7);

        expect(result).not.toBe(hooray);
        expect(result.length).toBe(2);
        expect(result).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [1,2];
        for (var i = 0; i < chars.length; i++)
            expect(result[i]).toBe(chars[i]);

        var chars1 = [1,2,3,4,5,6,7,8,9];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars1[i]);

    });

});