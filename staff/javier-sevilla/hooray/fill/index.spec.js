describe('Hooray.prototype.fill', function () {
    it('should update the array with the value passed only in the marked limits.', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, 3, 7);

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(9);

        var chars = [1, 2, 3, 11, 11, 11, 11, 8, 9];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with the value in from the beginning (no ending)', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, 2);

        expect(hooray.length).toBe(9);

        var chars = [1, 2, 11, 11, 11, 11, 11, 11, 11];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with only value without parameters limits', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11);

        expect(hooray.length).toBe(9);

        var chars = [11, 11, 11, 11, 11, 11, 11, 11, 11];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with the value when beginning is negative and no ending', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, -4);

        expect(hooray.length).toBe(9);

        var chars = [1, 2, 3, 4, 5, 11, 11, 11, 11];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with the value when beginning is negative and ending is negative', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, -7, -3);

        expect(hooray.length).toBe(9);

        var chars = [1, 2, 11, 11, 11, 11, 7, 8, 9];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with the value when the beginning and ending are both negatives and ending < beginning', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, -7, -3);

        expect(hooray.length).toBe(9);

        var chars = [1, 2, 11, 11, 11, 11, 7, 8, 9];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should update the array with the value from the beginning and ending are both negatives, begin < 0 and begin > length array', function () {
        var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);

        hooray.fill(11, -32, -7);

        expect(hooray.length).toBe(9);

        var chars = [11, 11, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });
});