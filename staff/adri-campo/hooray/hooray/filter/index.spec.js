describe('Hooray.prototype.filter', function () {
    it('should return a new hooray with the items that pass the condition', function () {
        var checkCondition = function(item) {
            return item < 25
        } 

        var numbers = new Hooray(1,4,5,53,23,37);
        var result = numbers.filter(checkCondition);
        var test = new Hooray(1,4,5,23);


        expect(result).toEqual(test);

     }); 

    it('should return an empty array if no elements pass the condition given', function () {
        function checkCondition (item){
            return item < 25
        
        }
        var numbers = new Hooray(90,33,26,53,25,37);
        var result = numbers.filter(checkCondition);
        var test = new Hooray();

        expect(result).toEqual(test);

    }); 


    it('should return a result if your input is an empty array', function () {
        function checkCondition (item){
            return item < 25
        
        }
        var numbers = new Hooray();
        var result = numbers.filter(checkCondition);
        var test = new Hooray();

        expect(result).toEqual(test);

    });


// ERRORS


    it("should return an error if the condition is not a function" , function () {
        var numbers = new Hooray (1,2,3,4,5);
        var checkCondition;

        expect(function(){numbers.filter(checkCondition)}).toThrowError(checkCondition + " is not a function");

    });


});



