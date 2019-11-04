describe('Hooray.prototype.includes', function() {

    it('should returns true', function() {
        var h = new Hooray(1, 2, 3);
        expect(h.includes(2)).toBeTruthy();
    });

    it('should be the same after the method', function() {
        var h = new Hooray(1, 2, 3);
        var expectedHooray = new Hooray(1, 2, 3);
        h.includes('a');
        expect(h).toEqual(expectedHooray);
    });

    it('should returns false', function() {
        var h = new Hooray(1, 2, 3);
        expect(h.includes(0)).toBeFalsy();
    });
});