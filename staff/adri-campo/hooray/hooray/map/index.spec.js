describe('hooray.prototype.map', function() {
    
    it("Should return an array affected by the function we have given", function() {
        function modify (item) {
            return item * 2
        };
    
        var numbers = new Hooray (5,10,20);
        var result = numbers.map(modify)
        var expected = new Hooray (10,20,40);

        expect(result).toEqual(expected);

    });


    // ERRORS

    it("Should show undefined is not a function", function () {
        var numbers = new Hooray (5,10,20);
        expect(function() { numbers.map(); }).toThrowError("undefined is not a function");
       

    });
    
    it("Should show undefined is not a function", function () {
        var numbers = new Hooray (5,10,20);
        expect(function() { numbers.map(false); }).toThrowError("false is not a function");
  
    });

    
    it("Should show undefined is not a function", function () {
        var numbers = new Hooray (5,10,20);
        expect(function() { numbers.map(1); }).toThrowError("1 is not a function");
    });

});