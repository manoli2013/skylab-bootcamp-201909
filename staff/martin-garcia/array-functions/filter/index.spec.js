describe('filter', function() {
    var arr = [1, 2, 3, 4, 5];

    it("Should returns the elements that pass the function", function() {
        var fn = function(element) { return element > 2; }
        expect(filter(arr, fn)).toEqual([3, 4, 5]);
    });


    it("result should be and array", function() {
        var result = [];
        var fn = function(element) { return element > 2; }
        expect(result).toBeInstanceOf(Array);
    });


    it("Should returns empty [] if 0 element pass the comprobation", function() {
        var fn = function(element) { return element > 20; }
        expect(filter(arr, fn)).toEqual([]);
    });


    it("Should returns an empty array if principal array has length === 0", function() {
        var fn = function(element) { return element > 20; }
        var a = [];
        expect(filter(a, fn)).toEqual([]);
    });


    it("Should throw an error if expresion is not instance of Function", function() {
        var fn = "pepito";
        expect(function() { filter(arr, fn) }).toThrowError(fn + " is not a function");
    });


    it("Should throw an error if arr is not instance of Function", function() {
        var fn = "pepito";
        var arr = "pepito";
        expect(function() { filter(arr, fn) }).toThrowError(fn + " is not defined");
    });
})