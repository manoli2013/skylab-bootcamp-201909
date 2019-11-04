describe('concat hooray', function () {
    it('should concat both hoorays in other one', function () {
        var hor1 = new Hooray(1, 2, 3, 4, 5);
        var hor2 = new Hooray(6, 7, 8, 9, 10);
        var result = hor1.concat(hor2);
        var expected = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        expect(result.length).toBe(10);
        expect(result).toEqual(expected);
    });

    it('should concat more than two arrays in one', function () {
        var hor1 = new Hooray(1, 2, 3, 4, 5);
        var hor2 = new Hooray(6, 7, 8, 9, 10);
        var hor3 = new Hooray(11, 12, 13, 14, 15);
        var result = hor1.concat(hor2, hor3);
        var expected = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

        expect(result.length).toBe(15);
        expect(result).toEqual(expected);
    });

});