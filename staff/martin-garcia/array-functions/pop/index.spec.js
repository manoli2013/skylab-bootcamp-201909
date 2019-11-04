describe("pop()", function() {

    it("Should remove the last item, array case", function() {
        var arr = [1, 2, 3];
        expect(pop(arr)).toEqual(3);
    });


    it("Should remove the last item, string case", function() {
        var arr = "hola";
        expect(pop(arr)).toEqual("a");
    });

    it("Length of initial array should decrease(-1)", function() {
        var arr = [1, 2, 3];
        pop(arr);
        expect(arr).toEqual([1, 2]);
    });

    it("If array.length === 0 should return undefined", function() {
        var a = [];
        expect(pop(a)).toBe(undefined);
    });

});