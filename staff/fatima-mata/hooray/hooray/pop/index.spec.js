describe("Hooray.prototype.pop", function() {

    it("should remove the last item", function() {
        
        var a = new Hooray(1, 2, 3);
        
        expect(a.pop()).toBe(3);
    });

    it("if a.length === 0 should return undefined", function() {
        
        var a = new Hooray();
        
        expect(a.pop()).toBe(undefined);
    });

    it("length of initial hooray should decrease(-1)", function() {
        
        var a = new Hooray(1, 2, 3);
        
        var expectedResult = new Hooray(1, 2);
        
        a.pop();
        
        expect(a).toEqual(expectedResult);
    });
});