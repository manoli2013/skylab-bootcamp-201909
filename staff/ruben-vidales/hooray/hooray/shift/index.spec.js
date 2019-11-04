describe('shift hooray', function () {
    it('should deletes the first item from the array', function () {
        var hor = new Hooray(1, 2, 3, 4, 5);
        var result = hor.shift();
        expect(hor.length).toBe(4);
        expect(result).toBe(1);
        expect(hor).toEqual(new Hooray(2, 3, 4, 5));
    });

    it('should returns an empty array if the array length at the beginning is 1', function () {
        var hor = new Hooray('a');
        var result = hor.shift();
        expect(hor.length).toBe(0);
        expect(hor).toEqual(new Hooray());
        expect(result).toEqual('a');
    });

    it('should returns undefined if the array is empty', function () {
        var hor = new Hooray(1);
        var result = hor.shift();
        expect(hor.length).toBe(0);
        expect(hor).toEqual(new Hooray());
        expect(result).toBe(undefined);
    });
});