describe('Hooray.prototype.pop', function () {
    it('should delete the last element', function () {
        var hooray = new Hooray(1, 2, 3);

        var lastElement = hooray.pop();

        expect(lastElement).toBe(3);
        expect(hooray.length).toBe(2);

        var chars = [1, 2];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });

});