describe('findIndex', function() {
    

    it("Should return index of the first match", function() {
        var arr = [5, 10, 5, 3];

        var expression = function(element) { return element > 2; }

        var expected = 0;
        expect(findIndex(arr, expression)).toBe(expected);

    });


    it("Should return -1 if does not find item", function() {
        var arr = [5, 10, 5, 3];
        var expression = function(element) { return element > 20; }

        var expected = -1;

        expect(findIndex(arr, expression)).toBe(expected);

    });

    it("Should hrow and error when expresion is not a function", function() {
        var arr = [5, 10, 5, 3];
        var expression = 1;
        expect(function() { findIndex(arr, expression) }).toThrowError('1 is not a function');

    });
})