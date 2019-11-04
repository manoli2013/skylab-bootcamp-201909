describe('pop hooray', function () {
    it('should deletes the last item from the hooray and return deleted element', function () {
        var hor = new Hooray(1, 2, 3, 4, 5);
        var result = hor.pop();
        var expected = new Hooray(1, 2, 3, 4);

        expect(hor.length).toBe(4);
        expect(result).toBe(5);
        expect(hor).toEqual(expected);
    });

    it('should returns an empty hooray if the hooray length at the beginning is 1', function () {
        var hor = new Hooray(1);
        var result = hor.pop();
        var expected = new Hooray();

        expect(hor.length).toBe(0);
        
        expect(hor).toEqual(expected);
    });

    it('should returns undefined if the hooray is empty', function () {
        var hor = new Hooray();
        var result = hor.pop();
        var expected = new Hooray();

        expect(result).toBeUndefined();
        expect(hor).toEqual(expected);
    });    
});