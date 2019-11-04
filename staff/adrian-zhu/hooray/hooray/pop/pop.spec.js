describe('Hooray.prototype.pop', function () {
    it('should pop a single item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.pop()).toBe('c');

        var chars = ['a', 'b'];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });
});
