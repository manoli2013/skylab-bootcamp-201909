describe('Horray.prototype.filter', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5);
    it("Should returns the elements that pass the function", function() {



        var fn = function(element) { return element > 2; };
        expect(hooray.filter(fn)).toEqual([3, 4, 5]);

    });


    it("Should returns -1 because there isn't match", function() {

        var fn = function(element) { return element > 20; }
        expect(hooray.filter(fn)).toEqual([]);

    });

    it("Should returns throw and errar because expresion is wrong", function() {

        var fn = "pepito";
        expect(function() { hooray.findIndex(fn) }).toThrowError(fn + " is not a function");

    });

    it("result should be and array", function() {
        var fn = function(element) { return element > 20; }
        var result = hooray.filter(fn);

        expect(result).toBeInstanceOf(Array);
    });
});