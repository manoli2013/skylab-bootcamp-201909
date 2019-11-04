describe('unshift hooray', function () {
    it('should add an element in the beginning of the hooray', function () {
        var hor = new Hooray(4, 5, 6);
        hor.unshift(3);
        var expected = new Hooray(3, 4, 5, 6);
        expect(hor.length).toBe(4);
        expect(hor).toEqual(expected);
    });

    it('should add two or more elements in the beginning of the array', function () {
        var hor = new Hooray(4, 5, 6);
        hor.unshift(3, 4);
        var expected = new Hooray(3, 4, 4, 5, 6);

        expect(hor.length).toBe(5);
        expect(hor).toEqual(expected);
    });

    it('should not add elements if have not elements', function () {
        var hor = new Hooray(4, 5, 6);
        hor.unshift();
        expect(hor.length).toBe(3);
    });
});