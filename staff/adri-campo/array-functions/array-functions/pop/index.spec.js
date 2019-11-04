describe ("pop", function () {

    it ("Should return last number of the array", function () {
        var array = [1,2,3];
        var result = pop(array);

        expect(result).toBe(3);

    });


    // ERRORS

    it ("Should return last number of the array", function () {
        var array = 3;

        expect( function () { pop(array); }).toThrowError(array + " is not an array");
    
    });

    it("Should fail on NULL array", function () {
        var array = null; //= [1, 3, 4, 6, 7, 8, 6];

        expect(function() { pop(array); }).toThrowError(null + " is not an array");

    });


});