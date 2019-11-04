describe('Hooray.prototype.push', function () {
    it('should push a single item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d')).toBe(4);
        expect(hooray.length).toBe(4);
        expect(hooray).toContain('d');

        var chars = new Hooray ('a', 'b', 'c', 'd');
        
        expect(hooray).toEqual(chars);
    });

    it('should push multiple items', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(hooray.length).toBe(11);

        var chars = new Hooray ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k');
        expect(hooray).toEqual(chars);
    });
});