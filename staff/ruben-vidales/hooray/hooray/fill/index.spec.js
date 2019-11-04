describe('fill hooray', function () {
    it('should every position in the hooray with the value of the second parameter', function () {
        var hor = new Hooray(1, 2, 3, 4, 5);
        var result = hor.fill(5);
        var expected = new Hooray(5, 5, 5, 5, 5);

        expect(result.length).toBe(5);
        expect(hor).toBe(result);
        expect(hor).toEqual(expected);
    });

    it('should every position in the hooray with the value of the second parameter and start in the position indicated by the third parameter', function () {
        var hor = new Hooray(1, 2, 3, 4, 5);
        var result = hor.fill(5, 2);
        var expected = new Hooray(1, 2, 5, 5, 5);

        expect(result.length).toBe(5);
        expect(hor).toBe(result);
        expect(hor).toEqual(expected);
    });

    it('should every position in the array with the value of the second parameter and start in the position indicated by the third parameter and end in the position idicated by the forth', function () {
        var hor = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        var result = hor.fill(5, 2, 7);
        var expected = new Hooray(1, 2, 5, 5, 5, 5, 5, 5, 9, 10);

        expect(result.length).toBe(10);
        expect(hor).toBe(result);
        expect(hor).toEqual(expected);
    });

    it('should return the same empty hooray', function () {
        var hor = new Hooray();
        var result = hor.fill(5);
        var expected = new Hooray();

        expect(result.length).toBe(0);
        expect(hor).toBe(result);
        expect(hor).toEqual(expected);
    });

});