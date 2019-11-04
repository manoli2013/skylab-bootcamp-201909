describe('reverse hooray', function () {
    it('should return the hooray ordered in the reverse direction', function () {
        var hor = new Hooray (9, 3, 12, 5, 8, 130, 44);
        hor.reverse();
        var expected = new Hooray (44, 130, 8, 5, 12, 3, 9);

        expect(hor).toEqual(expected);
    });
});