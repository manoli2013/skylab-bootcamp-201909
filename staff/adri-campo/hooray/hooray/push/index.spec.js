describe('Hooray.prototype.push', function () {
    it('should push a single item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d')).toBe(4);
        expect(hooray.length).toBe(4);
        expect(hooray[hooray.length - 1]).toBe('d');

        var chars = ['a', 'b', 'c', 'd'];

        expect(hooray).toContain('a', 'b', 'c', 'd');

});

    it('should push multiple items', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(hooray.length).toBe(11);

        var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
            expect(hooray).toContain('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k');
    });

    it("should push empty spaces, null or undefined", function () {
        var initialHooray = new Hooray(1,2,3);

        expect(initialHooray.push("")).toEqual(4);
        expect(initialHooray.push(null)).toEqual(5);
        expect(initialHooray.push(undefined)).toEqual(6);

    });


});