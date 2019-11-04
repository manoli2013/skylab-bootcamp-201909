describe('shift()', function() {
    it("Should remove the first item", function() {
        var arr = [1, 2, 3];
        expect(shift(arr)).toBe(1);
        expect(arr).toEqual([2, 3]);
    });

    it("Should return undefined", function() {
        var arr = [];
        expect(shift(arr)).toBe(undefined);

    });

    it("Should throws an error if array is not an Array", function() {
        var arr = 'Pepito';
        expect(function() { shift(arr) }).toThrowError(TypeError, arr + ' is not an Array');

    });

});