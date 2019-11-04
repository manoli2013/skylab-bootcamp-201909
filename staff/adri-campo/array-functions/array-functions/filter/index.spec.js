describe('filter', function () {
    it('should return a new array with the items that pass the condition', function () {
        function checkCondition (item){
            return item < 25
        
        }
        var array = [1,4,5,53,23,37];
        filter(array, checkCondition);

        expect(filter(array, checkCondition)).toEqual([1,4,5,23]);

    }); 

    it('should return an empty array if no elements pass the condition given', function () {
        function checkCondition (item){
            return item < 25
        
        }
        var array = [90,33,26,53,25,37];
        filter(array, checkCondition);

        expect(filter(array, checkCondition)).toEqual([]);

    }); 


    it('should return a result if your input is an empty array', function () {
        function checkCondition (item){
            return item < 25
        
        }
        var array = [];
        filter(array, checkCondition);

        expect(filter(array, checkCondition)).toEqual([]);

    }); 


// ERRORS

    it("should return an error if the array contains a number ", function () {
        function checkCondition (item){
            return item < 25
        
        }
        var array = 3;

        expect(function () { filter(array, checkCondition) }).toThrowError(array + " is not an array");

    }); 


    it("should return an error if the condition is not a function" , function () {
        var array = [1,2,3,4,5];
        var checkCondition = "im not a function!";

        expect( function() { filter(array, checkCondition) }).toThrowError(checkCondition + " is not a function");

    });


});



