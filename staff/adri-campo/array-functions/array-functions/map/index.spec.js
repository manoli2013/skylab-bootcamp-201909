describe('map', function() {
    
    it("Should return an array affected by the function we have given", function() {
        function modify (item) {
            return item * 2
        };
    
        var arrayexample = [5,10,20];
        var result = map(arrayexample, modify);
    

        expect(result).toEqual([10,20,40]);

    });


    // ERRORS

    it("Should show undefined is not an array", function () {
        function modify (item) {
            return item * 2
        };
        var arrayexample;
        
        expect(function() { map(arrayexample, modify); }).toThrowError(undefined + " is not an array");


    });

    it("Should show undefined is not a function", function () {
        // function modify (item) {
        //     return item * 2
        // };

        var arrayexample = [5,10,20];
        
        expect(function() { map(arrayexample, ); }).toThrowError(undefined + " is not a function");


    });
    

});