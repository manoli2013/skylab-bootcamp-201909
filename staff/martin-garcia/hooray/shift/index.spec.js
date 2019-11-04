describe("Hooray.prototype.shift", function() {
    it("Should remove the first item", function() {
        var h = new Hooray(1, 2, 3);
        expect(h.shift()).toBe(1);
    });

    it("Length of initial array should decrease(-1)", function() {
        var h = new Hooray(1, 2, 3);
        var expectedResult = new Hooray(2, 3);
        h.shift();
        expect(h.length).toEqual(expectedResult.length);
    });

    it("If h.length === 0 should return undefined", function() {
        var h = new Hooray();
        expect(h.shift()).toBe(undefined);
    });

});