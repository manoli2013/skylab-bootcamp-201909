describe('Hooray.prototype.concat', function () {

    it('should concat both hoorays in other one', function () {

        var a = new Hooray(1, 2, 3, 4, 5);
        var b = new Hooray(6, 7, 8, 9, 10);
        var result = a.concat(b);
        var expected = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        expect(result.length).toBe(10);
        expect(result).toEqual(expected);
    });

    it('should concat more than two hoorays in one', function () {

        var a = new Hooray(1, 2, 3, 4, 5);
        var b = new Hooray(6, 7, 8, 9, 10);
        var c = new Hooray(11, 12, 13, 14, 15);
        var result = a.concat(b, c);
        var expected = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

        expect(result.length).toBe(15);
        expect(result).toEqual(expected);
    });
});