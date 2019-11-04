describe("map()", function() {

    var arr = [1, 2, 3, 4, 3, 2, 1];
    var emptyArray = [];

    it("should return a new array", function() {
        var fn = function(element) { return element * 2; };
        expect(map(arr, fn)).toEqual([2, 4, 6, 8, 6, 4, 2]);
    });

    it("Initial array shouldnt be modified", function() {
        var arrBeforeFunction = [1, 2, 3];
        var fn = function(element) { return element * 2; };

        map(arr, fn);
        var arrAfterFunction = [1, 2, 3];

        expect(arrBeforeFunction).toEqual(arrAfterFunction);
    });

    it("Should  throw an error if expresion is not instance of Function", function() {
        var fn = 'pepito';
        var arr = [1, 2, 3];
        expect(function() { map(arr, fn) }).toThrowError(TypeError, 'expression is not a function');
    });



});